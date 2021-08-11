window.addEventListener('DOMContentLoaded', () => {
  let noteKeeper = new NoteKeeper();
  
  // shows list of abbreviated notes as link
    let abbreviatedNotes = noteKeeper.abbreviateAllNotes(noteKeeper.allNotes());
    let section = document.getElementById('notes');
    abbreviatedNotes.forEach((item, index) => {
      let anchor = document.createElement('a');
      anchor.href = `#${index}`;
      anchor.id = `${index}`;
      anchor.innerText = item + '\n';
      section.appendChild(anchor);
  });

  // clears anchor tags
  //const clearAllNotes = () => {
  //  document.getElementById("notes").remove();
  //};

  // create note
  document.getElementById("create-note").addEventListener("click", () => {
    console.log("CLICK");
    const content = document.querySelector("#note-content").value
    noteKeeper.createNote(content);
    const shortNote = noteKeeper.abbreviate(content);
    const notes = noteKeeper.allNotes();
    lastNoteIndex = notes.length -1;
    let anchor = document.createElement('a');
      anchor.href = `#${lastNoteIndex}`;
      anchor.id = `${lastNoteIndex}`;
      anchor.innerText = shortNote + '\n';
      section.appendChild(anchor);
  });
});