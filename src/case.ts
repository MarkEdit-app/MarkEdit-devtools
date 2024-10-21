import { camelCase, capitalCase, constantCase, dotCase, kebabCase, noCase, pascalCase, pascalSnakeCase, pathCase, sentenceCase, snakeCase, trainCase } from 'change-case';
import { titleCase } from 'title-case';
import { MenuItem } from 'markedit-api';
import { replaceText } from './editor';

const mapping: { [key: string]: (title: string) => string } = {
  'camelCase': camelCase,
  'Capital Case': capitalCase,
  'CONSTANT_CASE': constantCase,
  'dot.case': dotCase,
  'kebab-case': kebabCase,
  'no case': noCase,
  'PascalCase': pascalCase,
  'Pascal_Snake_Case': pascalSnakeCase,
  'path/case': pathCase,
  'Sentence case': sentenceCase,
  'snake_case': snakeCase,
  'Train-Case': trainCase,
  'Title Case': titleCase,
};

export const caseConverters: MenuItem[] = Object.keys(mapping).map(title => {
  return {
    title,
    action: () => {
      const transform = mapping[title] ?? ((input: string) => input);
      replaceText(transform);
    },
  };
});
