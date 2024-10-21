import { replaceText } from './editor';

export function urlEncode() {
  replaceText(encodeURIComponent);
}

export function urlDecode() {
  replaceText(decodeURIComponent);
}
