import { MarkEdit } from 'markedit-api';

export function replaceText(transform: (text: string) => string) {
  replaceSelection(transform(selectedText()));
}

export async function replaceTextAsync(transform: (text: string) => Promise<string>) {
  replaceSelection(await transform(selectedText()));
}

function replaceSelection(text: string) {
  const selection = mainSelection();
  MarkEdit.editorAPI.setText(text, selection);
}

function mainSelection() {
  return MarkEdit.editorAPI.getSelections()[0];
}

function selectedText(): string {
  return MarkEdit.editorAPI.getText(mainSelection());
}
