class NoteKeeper {
  constructor(notes = []) {
    this.notes = notes;
  }

  allNotes() {
    return this.notes;
  }

  abbreviate(note) {
    return note.slice(0, 20);
  }

  abbreviateAllNotes(notes) {
    let abbrNotes = notes.map((note) => {
      return this.abbreviate(note);
    });
    return abbrNotes;
  }

  createNote(note) {
    this.notes.push(note);
  }
}
