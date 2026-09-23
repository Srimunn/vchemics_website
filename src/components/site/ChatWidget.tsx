import { useEffect, useRef, useState } from "react";
import { MessageSquareText, X, Send, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { askVchemics, type ChatMessage } from "@/lib/chat";

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm the Vchemics assistant 👋 Ask me about our construction chemicals — waterproofing, admixtures, grouts, concrete repair — or how to get a quote.",
};

const SUGGESTIONS = [
  "Which waterproofing is best for a terrace?",
  "Do you supply concrete admixtures?",
  "How do I get a quote?",
  "Which areas do you deliver to?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  // Mirrors BackToTop's >500px threshold: when that button appears, lift the
  // launcher above it so the two never overlap.
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, busy, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    const next: ChatMessage[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const res = await askVchemics({ data: { messages: next } });
      setMessages((m) => [...m, { role: "assistant", content: res.answer }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please call us on +91 99423 54602 or email vchemics1989@gmail.com.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {/* Launcher — lifts above the Back-to-top button once it appears on scroll */}
      <div
        className={cn(
          "fixed right-5 z-[60] transition-[bottom] duration-300 print:hidden",
          scrolled ? "bottom-24" : "bottom-5",
        )}
      >
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Chat with Vchemics"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-brand-blue/30 transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundImage: "linear-gradient(135deg, #054782, #669930)" }}
          >
            {/* animated pulse rings */}
            <span className="absolute inset-0 rounded-full bg-brand-green/40 animate-ping" />
            <span className="absolute inset-0 rounded-full ring-2 ring-white/30" />
            <MessageSquareText className="relative h-6 w-6" />
            {/* little notification dot */}
            <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-brand-green ring-2 ring-white" />
            {/* label on hover (desktop) */}
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-brand-navy px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100 sm:block">
              Chat with us
            </span>
          </button>
        )}
      </div>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-0 right-0 z-[60] flex h-[100dvh] w-full flex-col bg-white shadow-2xl sm:bottom-5 sm:right-5 sm:h-[600px] sm:max-h-[80vh] sm:w-[380px] sm:rounded-2xl sm:border sm:border-border print:hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="dialog"
          aria-label="Vchemics chat"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between gap-3 px-4 py-3 text-white sm:rounded-t-2xl"
            style={{ backgroundImage: "linear-gradient(135deg, #054782, #669930)" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <div className="leading-tight">
                <p className="font-display text-sm font-bold">Vchemics Assistant</p>
                <p className="flex items-center gap-1 text-[11px] text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Online • replies instantly
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-white/90 transition-colors hover:bg-white/15"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-muted/40 px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm",
                    m.role === "user"
                      ? "rounded-br-md bg-brand-blue text-white"
                      : "rounded-bl-md border border-border bg-white text-foreground",
                  )}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {busy && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-border bg-white px-4 py-3 shadow-sm">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand-green [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand-green [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand-green" />
                </div>
              </div>
            )}

            {/* Suggested questions (only before the first user message) */}
            {messages.length === 1 && !busy && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-brand-blue/30 bg-white px-3 py-1.5 text-xs font-medium text-brand-blue transition-colors hover:border-brand-blue hover:bg-brand-blue/5"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-border bg-white p-3 sm:rounded-b-2xl"
          >
            <div className="flex items-end gap-2 rounded-2xl border border-border bg-background px-3 py-2 transition-colors focus-within:border-brand-blue">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                rows={1}
                placeholder="Type your question…"
                className="max-h-28 flex-1 resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                style={{ backgroundImage: "linear-gradient(135deg, #054782, #669930)" }}
              >
                {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </div>
            <p className="mt-1.5 text-center text-[10px] text-muted-foreground">
              Vchemics assistant • for exact prices & stock, contact our team
            </p>
          </form>
        </div>
      )}
    </>
  );
}
