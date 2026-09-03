// CTA click tracking for GA4.
//
// Fires a GA4 event each time a booking-related call-to-action is clicked, so the
// trial-booking funnel (page_view -> CTA click -> completed booking) can be measured.
// Event names are intentionally distinct so each can be marked as a "key event"
// (conversion) directly in GA4 without extra configuration:
//   - book_trial_click  : free trial booking buttons
//   - book_dropin_click : drop-in (visitor) booking buttons
//   - line_click        : LINE contact/booking buttons
//
// Safe no-op when gtag is unavailable (e.g. local dev without GA, or blockers).

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type CtaType = "trial" | "dropin" | "line";

const EVENT_NAME: Record<CtaType, string> = {
  trial: "book_trial_click",
  dropin: "book_dropin_click",
  line: "line_click",
};

export function trackCtaClick(params: {
  type: CtaType;
  /** Where on the page the CTA lives, e.g. "hero", "mobile_sticky_bar". */
  location: string;
  /** The visible button text. */
  label?: string;
  /** Destination URL. */
  url?: string;
  /** Active site language, e.g. "ja", "en". */
  language?: string;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", EVENT_NAME[params.type], {
    cta_location: params.location,
    cta_label: params.label,
    link_url: params.url,
    language: params.language,
  });
}
