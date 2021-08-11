window.addEventListener('DOMContentLoaded', () => {
  let noteKeeper = new NoteKeeper();
  let abbreviatedNotes = noteKeeper.abbreviate([
    'This is my birthday list:',
    'Shopping list: eggs, bread',
    'To do list: learn to code',
  ]);

  let section = document.getElementById('notes');

  abbreviatedNotes.forEach((item, index) => {
    let anchor = document.createElement('a');
    anchor.href = `#${index}`;
    anchor.id = `${index}`;
    anchor.innerText = item + '\n';
    section.appendChild(anchor);
  });
});
