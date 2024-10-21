import { encode, decode } from 'he';
import { replaceText } from './editor';

export function htmlEntityEncode() {
  replaceText(encode);
}

export function htmlEntityDecode() {
  replaceText(decode);
}
