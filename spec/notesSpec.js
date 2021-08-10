
let assertEqual = (actual,expected,toCheck) => {
  if (actual == expected) {
    console.log(`Yaay! Pass! ${toCheck}`)
  } else {
    console.log("Booh Fail!")
  }
}

// notes will be an instance of Notes class
let noteKeeper = new NoteKeeper();
assertEqual(noteKeeper.notes.length, 0, "Notekeeper notes function returns empty array")
