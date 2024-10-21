import { MarkEdit } from 'markedit-api';
import { base64Decode, base64Encode } from './src/base64';
import { generateUUID } from './src/uuid';
import { urlDecode, urlEncode } from './src/url';
import { htmlEntityDecode, htmlEntityEncode } from './src/he';
import { hashCalculators } from './src/hash';
import { caseConverters } from './src/case';

MarkEdit.addMainMenuItem({
  title: 'Dev Tools',
  children: [
    { title: 'Base64 Encode', action: base64Encode },
    { title: 'Base64 Deccode', action: base64Decode },
    { separator: true },
    { title: 'Generate UUID', action: generateUUID },
    { separator: true },
    { title: 'URL Encode', action: urlEncode },
    { title: 'URL Decode', action: urlDecode },
    { separator: true },
    { title: 'HTML Entity Encode', action: htmlEntityEncode },
    { title: 'HTML Entity Decode', action: htmlEntityDecode },
    { separator: true },
    { title: 'Hash', children: hashCalculators },
    { title: 'Text Cases', children: caseConverters },
  ],
});
