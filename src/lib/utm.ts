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

/* ────────────────────────────────────────────────────────────
 * FIRST-TOUCH (origem) — persiste em cookie por 2 anos, set-once.
 * Diferente do captureUTM (last-touch, sessionStorage da sessão atual),
 * o first-touch guarda a ORIGEM da PRIMEIRA visita e NUNCA é sobrescrito —
 * se o lead voltar pela bio dias depois, a origem do anúncio se mantém.
 * ──────────────────────────────────────────────────────────── */

const FT_COOKIE = "pt_ft_utm";
const FT_MAX_AGE = 60 * 60 * 24 * 730; // 2 anos em segundos

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, maxAge: number) {
  if (typeof document === "undefined") return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie =
    `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}` +
    `; SameSite=Lax${secure}`;
}

/**
 * Lê (ou grava na primeira vez) as UTMs de ORIGEM em cookie de 2 anos.
 * Chamar uma vez no mount, client-side. Set-once: só grava se ainda não houver
 * cookie E a URL atual tiver UTMs.
 */
export function captureFirstTouch(): UTMParams {
  if (typeof window === "undefined") return {};

  // Já temos a origem? Mantém (set-once).
  const existing = readCookie(FT_COOKIE);
  if (existing) {
    try {
      return JSON.parse(existing) as UTMParams;
    } catch {
      // cookie corrompido — segue pra recapturar abaixo
    }
  }

  const params = new URLSearchParams(window.location.search);
  const found: UTMParams = {};
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) found[key] = val;
  }

  if (Object.keys(found).length > 0) {
    writeCookie(FT_COOKIE, JSON.stringify(found), FT_MAX_AGE);
    return found;
  }

  return {};
}

/**
 * Monta a string `src` no formato source|medium|campaign|content|term
 * (mesmo formato do sck que a Hotmart/Script 4.0 usam).
 */
export function buildSrc(utm: UTMParams): string {
  return [
    utm.utm_source ?? "",
    utm.utm_medium ?? "",
    utm.utm_campaign ?? "",
    utm.utm_content ?? "",
    utm.utm_term ?? "",
  ].join("|");
}

export interface TypeformLeadParams {
  name: string;
  email: string;
  phone: string;
  outsideBrazil: "sim" | "nao" | "";
}

/**
 * Constrói a URL do Typeform já com os hidden fields preenchidos:
 * identidade (name/email/phone/outside_brazil) + UTMs de last-touch + src de first-touch.
 *
 * @param baseUrl   ex: https://form.typeform.com/to/yTkifQ5j
 * @param lead      dados digitados no form da landing
 * @param lastTouch UTMs da sessão atual (captureUTM)
 * @param firstTouch UTMs da origem (captureFirstTouch)
 */
export function buildTypeformUrl(
  baseUrl: string,
  lead: TypeformLeadParams,
  lastTouch: UTMParams,
  firstTouch: UTMParams
): string {
  // src = origem (first-touch); se não houver origem, cai pro last-touch
  const origin = Object.keys(firstTouch).length > 0 ? firstTouch : lastTouch;
  const src = buildSrc(origin);

  const q = new URLSearchParams();
  q.set("name", lead.name);
  q.set("email", lead.email);
  q.set("phone", lead.phone);
  q.set("outside_brazil", lead.outsideBrazil || "");

  // utm_* = last-touch (o que trouxe ele nesta sessão)
  for (const key of UTM_KEYS) {
    if (lastTouch[key]) q.set(key, lastTouch[key] as string);
  }

  if (src.replace(/\|/g, "")) q.set("src", src);

  return `${baseUrl}?${q.toString()}`;
}
