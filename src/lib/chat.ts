import { createServerFn } from "@tanstack/react-start";

/**
 * Vchemics website assistant — a small, sales-focused chatbot for the landing site.
 *
 * Engine   : Groq's hosted OpenAI-compatible API (free, ~zero server memory — just
 *            an HTTPS call). Set GROQ_API_KEY in the Railway environment. This reuses
 *            the exact same provider/credential approach as the Majestronicz Beta AI.
 * Model    : llama-3.3-70b-versatile by default (override with GROQ_MODEL).
 * Scope    : answers ONLY about Vchemics — products, solutions, services, coverage,
 *            and how to contact / request a quote. Off-topic questions are declined.
 */

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODELS_URL = "https://api.groq.com/openai/v1/models";
const GROQ_MODEL = process.env["GROQ_MODEL"] || "openai/gpt-oss-120b";

// Preference order when auto-selecting a chat model from the account's live list.
const PREFERRED = [
  GROQ_MODEL,
  "openai/gpt-oss-120b",
  "openai/gpt-oss-20b",
  "llama-3.3-70b-versatile",
  "qwen/qwen3.8-27b",
  "llama-3.1-8b-instant",
  "llama3-70b-8192",
  "allam-2-7b",
];

let cachedModel: string | null = null;

/**
 * Resolve a chat model that actually exists on THIS key. A hardcoded model can be
 * decommissioned/renamed by Groq and then every request 400/404s — this picks a
 * live one from GET /models (mirrors the Majestronicz Beta AI behaviour).
 */
async function resolveModel(apiKey: string, force = false): Promise<string | null> {
  if (cachedModel && !force) return cachedModel;
  try {
    const res = await fetch(GROQ_MODELS_URL, {
      headers: { Authorization: `Bearer ${apiKey}` },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return cachedModel || GROQ_MODEL;
    const data: any = await res.json().catch(() => ({}));
    const ids: string[] = (data?.data || [])
      .map((m: any) => m?.id || "")
      .filter(Boolean)
      // exclude non-chat models (speech, safety classifiers, embeddings, vision-only)
      .filter((id: string) => !/whisper|tts|guard|embed|vision|orpheus|safeguard/i.test(id));
    const pick =
      PREFERRED.find((p) => ids.includes(p)) ||
      ids.find((id) => /gpt-oss|llama|mixtral|gemma|qwen|allam/i.test(id)) ||
      ids[0] ||
      null;
    if (pick) cachedModel = pick;
    return cachedModel || GROQ_MODEL;
  } catch {
    return cachedModel || GROQ_MODEL;
  }
}

export type ChatMessage = { role: "user" | "assistant"; content: string };
export type ChatResult = { answer: string; degraded?: boolean };

// Compact, factual company knowledge the model answers from. Keep in sync with the
// site content (src/components/site/data.ts and the route pages).
const KNOWLEDGE = `
COMPANY: Vchemics India Solutions ("Vchemics") — a Chennai-based manufacturer and
supplier of high-performance construction chemicals, serving Chennai, Coimbatore,
Erode, Krishnagiri and across Tamil Nadu / South India. Same-day & 24-hour dispatch.

CONTACT:
- Phone / WhatsApp: +91 99423 54602
- Email: vchemics1989@gmail.com
- Address: Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai, Tamil Nadu 600050
- Hours: Monday–Saturday, 9:00 AM – 7:00 PM
- Instagram: @vchemics_india

PRODUCT RANGE:
- Concrete Admixtures & chemical additives (PCE & SNF superplasticisers, accelerators,
  retarders) — up to 30% water reduction, extended slump retention. IS 9103 / ASTM C494.
- Waterproofing Chemicals — crystalline & polymer / acrylic formulations, integral and
  surface systems for terraces, basements, wet areas and water tanks.
- PU (polyurethane) Injection Grouts — for sealing active water leaks and cracks.
- Non-Shrink Grouts — cementitious & epoxy, for base plates, machine foundations, anchoring.
- Epoxy Grouts & epoxy systems — chemical-resistant tiling/industrial grouting.
- Micro Concrete — flowable repair concrete for structural rehabilitation.
- Concrete Repair mortars — polymer-modified patch repair & bonding agents.
- Protective Coatings — for buildings and structures.

SOLUTIONS / SERVICES (application expertise):
- Terrace waterproofing, Basement waterproofing
- Concrete crack repair, Structural rehabilitation / strengthening
- Industrial flooring (epoxy / self-levelling)
- Protective painting & coatings

PRICING: Prices depend on the product grade, quantity and site requirement. For a
quote, collect the visitor's requirement (product, quantity, location, timeline) and
direct them to call/WhatsApp +91 99423 54602, email vchemics1989@gmail.com, or use the
enquiry / "Get a Quote" form on the website.
`.trim();

function systemPrompt(): string {
  return [
    "You are the friendly website assistant for Vchemics India Solutions, a construction-chemicals manufacturer.",
    "Answer visitor questions about Vchemics products, solutions, technical use, coverage areas, and how to buy or get a quote.",
    "Use ONLY the facts below. If you don't know a specific detail (an exact price, stock, or spec not listed), say so plainly and invite the visitor to contact the team — never invent numbers, standards or claims.",
    "Be concise and helpful (2–5 sentences), professional and warm. Where useful, nudge the visitor to request a quote or contact the team.",
    "Politely decline anything unrelated to Vchemics or construction chemicals, and steer back to how you can help with their project.",
    "",
    KNOWLEDGE,
  ].join("\n");
}

async function askGroq(messages: ChatMessage[]): Promise<ChatResult> {
  const apiKey = process.env["GROQ_API_KEY"];
  if (!apiKey) {
    return {
      degraded: true,
      answer:
        "The assistant isn't connected yet. Please reach our team on +91 99423 54602 or vchemics1989@gmail.com and we'll help right away.",
    };
  }

  // Keep only the recent turns to stay well within limits.
  const trimmed = messages.slice(-10).map((m) => ({
    role: m.role,
    content: String(m.content || "").slice(0, 2000),
  }));

  let model = (await resolveModel(apiKey)) || GROQ_MODEL;

  // Try once, and if the model is unavailable (404) re-resolve from the live list and retry.
  for (let attempt = 0; attempt < 2; attempt++) {
    let res: Response;
    try {
      res = await fetch(GROQ_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          model,
          temperature: 0.3,
          max_tokens: 600,
          messages: [{ role: "system", content: systemPrompt() }, ...trimmed],
        }),
        signal: AbortSignal.timeout(30_000),
      });
    } catch (err) {
      console.error("[vchemics-chat] network error:", err);
      return {
        degraded: true,
        answer:
          "I couldn't reach the assistant just now. Please try again, or contact us on +91 99423 54602 / vchemics1989@gmail.com.",
      };
    }

    if ((res.status === 404 || res.status === 400) && attempt === 0) {
      const fresh = await resolveModel(apiKey, true);
      if (fresh && fresh !== model) {
        model = fresh;
        continue;
      }
    }

    if (res.status === 429) {
      return {
        degraded: true,
        answer: "I'm a little busy right now — please try again in a moment, or call +91 99423 54602.",
      };
    }

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      // Log the real reason so it shows in the Railway server logs for diagnosis.
      console.error(`[vchemics-chat] Groq error ${res.status} (model=${model}):`, detail.slice(0, 500));
      return {
        degraded: true,
        answer:
          "Sorry, the assistant hit an error. Please contact our team on +91 99423 54602 or vchemics1989@gmail.com.",
      };
    }

    try {
      const data: any = await res.json();
      const answer = data?.choices?.[0]?.message?.content?.trim();
      if (!answer) {
        return { degraded: true, answer: "Sorry, I didn't catch that — could you rephrase your question?" };
      }
      return { answer };
    } catch {
      return { degraded: true, answer: "I got an unreadable response. Please try again shortly." };
    }
  }

  return {
    degraded: true,
    answer: "Sorry, the assistant is busy right now. Please try again shortly, or call +91 99423 54602.",
  };
}

/** POST server function called by the chat widget. CSRF is enforced by src/start.ts. */
export const askVchemics = createServerFn({ method: "POST" })
  .validator((data: { messages: ChatMessage[] }) => data)
  .handler(async ({ data }): Promise<ChatResult> => {
    const messages = data?.messages;
    if (!Array.isArray(messages) || messages.length === 0) {
      return { degraded: true, answer: "Please type a question and I'll help." };
    }
    return askGroq(messages);
  });
