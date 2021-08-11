let assertEqual = (actual, expected, toCheck) => {
  if (actual == expected) {
    console.log(`Yaay! Pass! ${toCheck}`);
  } else {
    console.log(`BOOH FAIL! ${toCheck}`);
  }
};

// notes will be an instance of Notes class
let noteKeeper = new NoteKeeper();
assertEqual(
  noteKeeper.allNotes.length,
  0,
  'Notekeeper notes function returns empty array'
);

noteKeeper = new NoteKeeper();
let abbreviatedNotes = noteKeeper.abbreviate([
  'This is my birthday list:',
  'Shopping list: eggs, bread',
  'To do list: learn to code',
]);
assertEqual(
  abbreviatedNotes[0],
  'This is my birthday ',
  'Notekeeper abbreviates notes to 20 characters'
);

assertEqual(
  abbreviatedNotes[1],
  'Shopping list: eggs,',
  'Notekeeper abbreviates notes to 20 characters'
);

assertEqual(
  abbreviatedNotes[2],
  'To do list: learn to',
  'Notekeeper abbreviates notes to 20 characters'
);

noteKeeper = new NoteKeeper();
let createdNote = noteKeeper.createNote('Happy Birthday');
noteKeeper.createNote('Happy Christmas');

let all = noteKeeper.allNotes();

// assertEqual(createdNote, 'Happy Birthday', 'createNote returns note');

assertEqual(all[0], 'Happy Birthday', 'notes[0] returns first note');

assertEqual(all[1], 'Happy Christmas', 'notes[1] returns second note');

console.log(noteKeeper.allNotes());
// noteKeeper.shortNotes
//.abbreviate
//.emojify
