import { MD5 } from 'crypto-js';
import { MenuItem } from 'markedit-api';
import { replaceText, replaceTextAsync } from './editor';

export const hashCalculators: MenuItem[] = [
  { title: 'MD5', action: md5 },
  { title: 'SHA1', action: sha1 },
  { title: 'SHA256', action: sha256 },
  { title: 'SHA512', action: sha512 },
];

function md5() {
  replaceText(text => MD5(text).toString());
}

function sha1() {
  replaceTextAsync(text => calculate(text, 'SHA-1'));
}

function sha256() {
  replaceTextAsync(text => calculate(text, 'SHA-256'));
}

function sha512() {
  replaceTextAsync(text => calculate(text, 'SHA-512'));
}

async function calculate(input: string, algorithm: 'SHA-1' | 'SHA-256' | 'SHA-512') {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);

  const buffer = await crypto.subtle.digest(algorithm, data);
  const array = Array.from(new Uint8Array(buffer));

  return array.map(b => b.toString(16).padStart(2, '0')).join('');
}
