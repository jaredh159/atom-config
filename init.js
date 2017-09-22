// ctrl-alt-cmd-L to force reload

function editor() {
  return atom.workspace.getActiveTextEditor();
}

function add(...args) {
  atom.commands.add(...args)
}

add('atom-text-editor', 'jared:move-up-10-lines', () => editor().moveUp(10));
add('atom-text-editor', 'jared:move-down-10-lines', () => editor().moveDown(10));


add('atom-text-editor', 'jared:insert-curly-braces', () => {
  editor().insertText('{}');
  editor().moveLeft(1);
});

add('atom-text-editor', 'jared:insert-square-braces', () => {
  editor().insertText('[]');
  editor().moveLeft(1);
});

add('atom-text-editor', 'jared:semicolon-enter', () => {
  const ed = editor();
  ed.moveToEndOfLine();
  ed.insertText(';');
  ed.insertNewline();
});
