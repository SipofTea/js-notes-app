window.addEventListener('DOMContentLoaded', () => {
  let noteKeeper = new NoteKeeper();

  ////////////NEW
  document.getElementById('back-button').addEventListener('click', () => {
    history.pushState('', document.title, 'index.html');
    singleToAllNotes();
  });

  // create note
  document.getElementById('create-note').addEventListener('click', () => {
    console.log('CLICK');
    const content = document.querySelector('#note-content').value;
    noteKeeper.createNote(content);
    const shortNote = noteKeeper.abbreviate(content);
    const notes = noteKeeper.allNotes();
    lastNoteIndex = notes.length - 1;
    let anchor = document.createElement('a');
    anchor.href = `#${lastNoteIndex}`;
    anchor.id = `${lastNoteIndex}`;
    anchor.innerText = shortNote + '\n';
    section.appendChild(anchor);
  });

  // see the full note

  const makeURLShowFullNote = () => {
    window.addEventListener('hashchange', showFullNote);
  };

  const getNoteIndexFromURL = (location) => {
    return window.location.hash.split('#')[1];
  };

  /////////// NEW BIT//////////
  const allToSingleNote = () => {
    document.getElementById('homepage').classList.remove('page-active');
    document.getElementById('homepage').classList.add('page-inactive');
    document.getElementById('note-page').classList.remove('page-inactive');
    document.getElementById('note-page').classList.add('page-active');
  };

  const singleToAllNotes = () => {
    document.getElementById('homepage').classList.add('page-active');
    document.getElementById('homepage').classList.remove('page-inactive');
    document.getElementById('note-page').classList.add('page-inactive');
    document.getElementById('note-page').classList.remove('page-active');
  };

  const showFullNote = () => {
    // let pageContent = document.querySelector(".container");
    // pageContent.remove();
    index = getNoteIndexFromURL();
    notes = noteKeeper.allNotes();
    fullNote = notes[index];

    // newElement = document.createElement('p');
    // document.body.appendChild(newElement);
    // newElement.innerHTML = fullNote;

    /////////// NEW BIT//////////
    const element = document.getElementById('full-note');
    element.innerHTML = fullNote;
    allToSingleNote();
  };

  makeURLShowFullNote();

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
});
