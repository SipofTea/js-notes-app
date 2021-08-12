window.addEventListener('DOMContentLoaded', () => {

  let noteKeeper = new NoteKeeper();

  const retrieveNotes = () => {
    for(let i = 0; i < localStorage.length; i++) {
      noteKeeper.notes.push(localStorage.getItem(i))
    }
  }

  retrieveNotes();
  
  // create note


  document.getElementById('create-note').addEventListener('click', () => {
    const content = document.querySelector('#note-content').value;
    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({text: content})
    }).then(response => {
      return response.json()
    }).then((data) => {
      noteKeeper.createNote(data.emojified_text); 
      const notes = noteKeeper.allNotes();
      const lastNoteIndex = notes.length -1;
      const lastNote = notes[lastNoteIndex]
      const shortNote = noteKeeper.abbreviate(lastNote);
      localStorage.setItem(lastNoteIndex, lastNote)
      anchorTagCreation(lastNoteIndex, shortNote)
    });
});

  //create anchor tag element with abbreviated note content
  const anchorTagCreation = (index, content) => {
    let anchor = document.createElement('a');
    anchor.href = `#${index}`;
    anchor.id = `${index}`;
    anchor.innerText = content + '\n';
    section.appendChild(anchor);
  };

  // switch display to single full note
  const allToSingleNote = () => {
    switchDisplay('homepage', 'note-page');
  };

  // get index of full note
  const getNoteIndexFromURL = () => {
      return window.location.hash.split('#')[1];
    };

  // populate full note element
  const populateNote = (index) => {
    notes = noteKeeper.allNotes();
    fullNote = notes[index];
    const element = document.getElementById('full-note');
    element.innerHTML = fullNote;
  };

  // show full note element
  const showFullNote = () => {
    index = getNoteIndexFromURL();
    populateNote(index);
    allToSingleNote();
  };

  // display full note
  const makeURLShowFullNote = () => {
    window.addEventListener('hashchange', showFullNote);
  };

  makeURLShowFullNote();

  // switch display to all abbreviated notes
  const singleToAllNotes = () => {
    switchDisplay('note-page', 'homepage');
  };

  // return from single full note to all notes display
  document.getElementById('back-button').addEventListener('click', () => {
    history.pushState('', document.title, 'index.html');
    singleToAllNotes();
  });

  // shows list of abbreviated notes as link
  let abbreviatedNotes = noteKeeper.abbreviateAllNotes(noteKeeper.allNotes());
  let section = document.getElementById('notes');
  abbreviatedNotes.forEach((content, index) => {
    anchorTagCreation(index, content);
  });

  const switchDisplay = (current, future) => {
    document.getElementById(future).classList.add('page-active');
    document.getElementById(future).classList.remove('page-inactive');
    document.getElementById(current).classList.add('page-inactive');
    document.getElementById(current).classList.remove('page-active');
  };
});



