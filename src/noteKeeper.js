class NoteKeeper {
  
  notes() {
    let array = [];
    return array;
  }

  abbreviate(notes) {
    let abbrNotes = notes.map(note => {
      return note.slice(0, 20)
    });
    return abbrNotes
  };
};