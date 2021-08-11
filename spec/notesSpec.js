// equal matcher for tests
let assertEqual = (actual, expected, toCheck) => {
  if (actual == expected) {
    console.log(`Yaay! Pass! ${toCheck}`);
  } else {
    console.log(`BOOH FAIL! ${toCheck}`);
  }
};

// all notes will return an array
let noteKeeper = new NoteKeeper();
assertEqual(
  noteKeeper.allNotes.length,
  0,
  'Notekeeper notes function returns empty array'
);

// abbreviate shortens notes to 20 characters
noteKeeper = new NoteKeeper();
let abbreviatedNotes = noteKeeper.abbreviate([
  'This is my birthday list:',
  'Shopping list: eggs, bread',
  'To do list: learn to code',
]);
assertEqual(
  abbreviatedNotes[0],
  'This is my birthday ',
  'Notekeeper abbreviates first note to 20 characters'
);
assertEqual(
  abbreviatedNotes[1],
  'Shopping list: eggs,',
  'Notekeeper abbreviates second note to 20 characters'
);
assertEqual(
  abbreviatedNotes[2],
  'To do list: learn to',
  'Notekeeper abbreviates third note to 20 characters'
);

// create note adds new note to allNotes array
noteKeeper = new NoteKeeper();
noteKeeper.createNote('Happy Birthday');
noteKeeper.createNote('Happy Christmas');
let all = noteKeeper.allNotes();

assertEqual(all[0], 'Happy Birthday', 'notes[0] returns first note');
assertEqual(all[1], 'Happy Christmas', 'notes[1] returns second note');

// noteKeeper.shortNotes
//.abbreviate
//.emojify
