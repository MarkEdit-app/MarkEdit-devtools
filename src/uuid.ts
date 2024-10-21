import { v4 as UUID } from 'uuid';
import { replaceText } from './editor';

export function generateUUID() {
  replaceText(_ => UUID());
}
