/**
 * Validates international phone number
 * Accepts formats: +5511999999999, 5511999999999, 11999999999, etc.
 */
export function isValidPhone(value: string): boolean {
  const cleaned = value.replace(/[\s\-().]/g, "");
  // Allow + prefix, then 7–15 digits
  return /^\+?\d{7,15}$/.test(cleaned);
}

/**
 * Validates email address
 */
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Formats a phone number for WhatsApp link (digits only, no +)
 */
export function sanitizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Applies a simple phone mask for Brazilian numbers
 * International numbers are left as-is after the +
 */
export function applyPhoneMask(value: string): string {
  // If it starts with + keep it raw (international)
  if (value.startsWith("+")) {
    // Allow digits and + only
    return value.replace(/[^\d+\s\-().]/g, "");
  }

  // Brazilian mask: (XX) XXXXX-XXXX
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}
