window.addEventListener('DOMContentLoaded', () => {
  let noteKeeper = new NoteKeeper();
  let abbreviatedNotes = noteKeeper.abbreviate([
    'This is my birthday list:',
    'Shopping list: eggs, bread',
    'To do list: learn to code',
  ]);

  let anchor = document.createElement('a');
  anchor.href = '#1';
  anchor.innerText = abbreviatedNotes[0];
  document.body.appendChild(anchor);
});
