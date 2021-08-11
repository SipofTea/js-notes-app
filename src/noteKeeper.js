class NoteKeeper {
  constructor() {
    this.notes = [];
  }

  allNotes() {
    return this.notes;
  }

  abbreviate(notes) {
    let abbrNotes = notes.map((note) => {
      return note.slice(0, 20);
    });
    return abbrNotes;
  }

  createNote(note) {
    this.notes.push(note);
  }
}
