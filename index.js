const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesApi = require('./notesApi.js');

const notesModel = new NotesModel();
const notesApi = new NotesApi();
const notesView = new NotesView(notesModel, notesApi);
notesView.displayNotes() 

notesApi.loadNotes(('http://localhost:3000/notes'), (notes) => {
  notesModel.setNotes(notes);
  notesView.displayNotes();
})

