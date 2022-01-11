const NotesModel = require("./notesModel");

class NotesView {
  constructor(model=NotesModel) {
    this.model = model; // dependency inject the model
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
