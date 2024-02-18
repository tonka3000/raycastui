import { Clipboard, getPreferenceValues, showHUD } from "@raycast/api";

export function joinNonEmpty(parts?: (string | undefined)[], separator?: string | undefined): string | undefined {
  if (!parts || parts.length <= 0) {
    return undefined;
  }
  return parts.join(separator);
}

export function getBoundedPreferenceNumber(params: {
  name: string;
  min?: number;
  max?: number;
  default?: number;
}): number {
  const boundMin = params.min || 1;
  const boundMax = params.max || 100;
  const fallback = params.default || 10;
  const prefs = getPreferenceValues();
  const maxtext = (prefs[params.name] as string) || "";
  const max = Number(maxtext);
  if (isNaN(max)) {
    return fallback;
  }
  if (max < boundMin) {
    return fallback;
  }
  if (max > boundMax) {
    return fallback;
  }
  return max;
}

export async function copyToClipboardWithHUD(content: string | number | Clipboard.Content) {
  await Clipboard.copy(content);
  showHUD("Copied to Clipboard");
}
