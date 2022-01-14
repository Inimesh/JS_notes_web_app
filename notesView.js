const NotesApi = require("./notesApi");
const NotesModel = require("./notesModel");

class NotesView {
  constructor(model=new NotesModel(), api=new NotesApi()) {
    this.model = model; // dependency inject the model
    this.api = api;

    document.querySelector('#add-note-button').addEventListener('click', () => { // When the button is clicked
      document.querySelectorAll('.note').forEach((note) => { // remove all the notes displayed on the page
        note.remove();
      })

      const noteToAdd = document.querySelector('#note-input').value; // assign content of input box to variable

      this.api.createNote('http://localhost:3000/notes', noteToAdd, data => { // Makes post request to server adding on new note and returning list of all notes
        this.model.reset() // wipe all notes held in the model array
        this.model.setNotes(data); // set notes held in the model array to the returned full list of notes
        this.displayNotes(); // display notes on screen
      })


      document.querySelector('#note-input').value = ''; // reset the input box back to empty
    });
  }

  displayNotes() {
    // get the list of notes from the model
    // for each note, create a new div element on the page with a HTML class "note"
    this.model.getNotes().forEach((str) => {
      const elem = document.createElement('div')
      elem.appendChild(document.createTextNode(str))
      elem.setAttribute("class", "note");
      document.body.appendChild(elem);
    });
  }
}


module.exports = NotesView;
