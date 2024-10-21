import { replaceText } from './editor';

export function base64Encode() {
  replaceText(convertToBase64);
}

export function base64Decode() {
  replaceText(convertFromBase64);
}

function convertToBase64(input: string) {
  const bytes = new TextEncoder().encode(input);
  const binary = Array.from(bytes, byte => String.fromCharCode(byte)).join('');
  return btoa(binary);
}

function convertFromBase64(input: string) {
  const binary = atob(input);
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}
