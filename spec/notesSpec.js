
let assertEqual = (actual,expected,toCheck) => {
  if (actual == expected) {
    console.log(`Yaay! Pass! ${toCheck}`)
  } else {
    console.log(`Booh Fail! ${toCheck}`)
  }
}

// notes will be an instance of Notes class
let noteKeeper = new NoteKeeper();
assertEqual(noteKeeper.notes.length, 0, "Notekeeper notes function returns empty array")


noteKeeper = new NoteKeeper();
let abbreviatedNotes = noteKeeper.abbreviate(['This is my birthday list:', 'Shopping list: eggs, bread', 'To do list: learn to code'])
assertEqual(abbreviatedNotes[0], "This is my birthday ", 
'Notekeeper abbreviates notes to 20 characters')

assertEqual(abbreviatedNotes[1], "Shopping list: eggs,", 
'Notekeeper abbreviates notes to 20 characters')

assertEqual(abbreviatedNotes[2], "To do list: learn to", 
'Notekeeper abbreviates notes to 20 characters')

// noteKeeper.shortNotes
//.abbreviate
//.emojify
