export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const UTM_KEYS: (keyof UTMParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

const STORAGE_KEY = "pt_utm";

/**
 * Reads UTM params from the current URL and persists them in sessionStorage.
 * Call this once on mount (client-side only).
 */
export function captureUTM(): UTMParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const found: UTMParams = {};

  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) found[key] = val;
  }

  if (Object.keys(found).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    } catch {
      // ignore storage errors
    }
    return found;
  }

  // Return previously captured UTMs if present
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as UTMParams;
  } catch {
    // ignore
  }

  return {};
}

/**
 * Appends UTM params to a WhatsApp message string if present.
 */
export function appendUTMToMessage(message: string, utm: UTMParams): string {
  const entries = UTM_KEYS.filter((k) => utm[k]).map(
    (k) => `${k}: ${utm[k]}`
  );
  if (entries.length === 0) return message;
  return `${message}\n\n📊 Origem: ${entries.join(" | ")}`;
}
