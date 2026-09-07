/**
 * Google Analytics 4 (GA4) Integration
 * Measurement ID: G-VNVRYQ1GR4
 */

export const GA_MEASUREMENT_ID = "G-VNVRYQ1GR4";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispatches a custom or standard event to Google Analytics 4
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        send_to: GA_MEASUREMENT_ID,
        ...params,
      });
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch (err) {
    console.debug("[GA4] Failed to dispatch event:", eventName, err);
  }
}

/**
 * Tracks a page view in GA4 on SPA route transitions
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: title || (typeof document !== "undefined" ? document.title : undefined),
        page_location: window.location.href,
      });
    }
  } catch (err) {
    console.debug("[GA4] Failed to track page view:", url, err);
  }
}

/**
 * Custom Event: Form Submission
 * Event Name: contact_form_submit
 */
export function trackContactFormSubmit(params: {
  productCategory?: string;
  fullName?: string;
  company?: string;
  phone?: string;
  email?: string;
  location?: string;
  quantity?: string;
  mode?: string;
}) {
  trackEvent("contact_form_submit", {
    category: "Lead Generation",
    product_category: params.productCategory || "General",
    client_name: params.fullName || "Anonymous",
    company: params.company || "Not provided",
    location: params.location || "Not specified",
    quantity: params.quantity || "Not specified",
    form_mode: params.mode || "standard",
    timestamp: new Date().toISOString(),
  });
}

/**
 * Custom Event: WhatsApp Click
 * Event Name: WhatsApp_click
 */
export function trackWhatsAppClick(
  params: {
    source?: string;
    product?: string;
    post?: string;
    destination?: string;
  } = {},
) {
  trackEvent("WhatsApp_click", {
    contact_method: "WhatsApp",
    whatsapp_number: "+91 99423-54602",
    click_source: params.source || "website",
    product_name: params.product,
    article_title: params.post,
    target_url: params.destination,
  });
}

/**
 * Custom Event: Phone Call Click
 * Event Name: Call_click
 */
export function trackCallClick(
  params: {
    phone_number?: string;
    source?: string;
  } = {},
) {
  trackEvent("Call_click", {
    contact_method: "Phone",
    phone_number: params.phone_number || "+91 99423-54602",
    click_source: params.source || "website",
  });
}

/**
 * Custom Event: Email Click
 * Event Name: Email_click
 */
export function trackEmailClick(
  params: {
    email?: string;
    source?: string;
  } = {},
) {
  trackEvent("Email_click", {
    contact_method: "Email",
    email_address: params.email || "vchemics1989@gmail.com",
    click_source: params.source || "website",
  });
}

/**
 * Custom Event: Get Quote Click
 * Event Name: Get_quote_click
 */
export function trackGetQuoteClick(
  params: {
    button_location?: string;
    source?: string;
    product?: string;
    label?: string;
  } = {},
) {
  trackEvent("Get_quote_click", {
    event_category: "Conversion Intent",
    button_location: params.button_location || "page",
    button_label: params.label || "Get Quote",
    page_source: params.source || (typeof window !== "undefined" ? window.location.pathname : ""),
    product_name: params.product,
  });
}

// Internal flag to avoid duplicate trigger when an element has both explicit onClick & global listener
let lastTrackedTimestamp = 0;
let lastTrackedEventKey = "";

function shouldThrottleEvent(key: string): boolean {
  const now = Date.now();
  if (key === lastTrackedEventKey && now - lastTrackedTimestamp < 350) {
    return true;
  }
  lastTrackedTimestamp = now;
  lastTrackedEventKey = key;
  return false;
}

/**
 * Global Event Delegation: Automatically listens for tel:, mailto:, WhatsApp,
 * and Quote button clicks across the entire DOM as a safety net.
 */
export function initGlobalAnalyticsListeners(): () => void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // Find closest anchor or button
    const anchor = target.closest("a") as HTMLAnchorElement | null;
    const button = target.closest("button, a") as HTMLElement | null;

    // 1. Phone Call clicks
    if (anchor?.href?.startsWith("tel:")) {
      const phone = anchor.href.replace("tel:", "").trim();
      const key = `Call_click:${phone}`;
      if (!shouldThrottleEvent(key)) {
        trackCallClick({
          phone_number: phone,
          source: window.location.pathname,
        });
      }
      return;
    }

    // 2. Email clicks (mailto: or Gmail web compose)
    if (anchor?.href?.startsWith("mailto:") || anchor?.href?.includes("mail.google.com")) {
      const emailMatch = anchor.href.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
      const email = emailMatch ? emailMatch[1] : "vchemics1989@gmail.com";
      const key = `Email_click:${email}`;
      if (!shouldThrottleEvent(key)) {
        trackEmailClick({
          email,
          source: window.location.pathname,
        });
      }
      return;
    }

    // 3. WhatsApp clicks
    if (
      anchor?.href?.includes("wa.me") ||
      anchor?.href?.includes("api.whatsapp.com") ||
      anchor?.href?.startsWith("whatsapp:")
    ) {
      const key = `WhatsApp_click:${anchor.href}`;
      if (!shouldThrottleEvent(key)) {
        trackWhatsAppClick({
          source: window.location.pathname,
          destination: anchor.href,
        });
      }
      return;
    }

    // 4. Get Quote clicks
    if (button) {
      const text = (button.textContent || "").trim().toLowerCase();
      const href = anchor?.getAttribute("href") || "";
      const isQuoteCta =
        button.getAttribute("data-analytics") === "get-quote" ||
        button.getAttribute("data-analytics-event") === "Get_quote_click" ||
        text.includes("get a quote") ||
        text.includes("get instant quote") ||
        text.includes("request quote") ||
        text.includes("request technical quotation") ||
        (href === "/contact" &&
          (text.includes("quote") || text.includes("pricing") || text.includes("get")));

      if (isQuoteCta) {
        const key = `Get_quote_click:${text}`;
        if (!shouldThrottleEvent(key)) {
          trackGetQuoteClick({
            label: button.textContent?.trim() || "Get Quote",
            button_location: window.location.pathname,
            source: window.location.pathname,
          });
        }
      }
    }
  };

  document.addEventListener("click", handleClick, { capture: true, passive: true });

  return () => {
    document.removeEventListener("click", handleClick, { capture: true });
  };
}
