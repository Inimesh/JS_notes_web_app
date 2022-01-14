/**
* @jest-environment jsdom
*/

const fs = require('fs');

const NotesModel = require('./notesModel.js');
const NotesView = require('./notesView.js');
const NotesApi = require("./notesApi");


describe('NotesView', () => {
  describe('initializing NotesView instance', () => {
    test('dependency inject NotesModel instance into NotesView', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const notesModel = new NotesModel();
      const notesApi = new NotesApi();
      notesModel.addNotes("Milk")
      notesModel.addNotes("Tea")

      const notesView = new NotesView(notesModel, notesApi);
      notesView.displayNotes();
      
      expect(document.querySelectorAll('div.note').length).toBe(2)

    })
    
  })
})
