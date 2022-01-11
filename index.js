const NotesModel = require('./notesModel');
const NotesView = require('./notesView')

const notesModel = new NotesModel();
notesModel.addNotes('This is an example note')
const notesView = new NotesView(notesModel);
notesView.displayNotes()



