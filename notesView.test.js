/**
* @jest-environment jsdom
*/

const fs = require('fs');

const NotesModel = require('./notesModel.js');
const NotesView = require('./notesView.js');


describe('NotesView', () => {
  describe('initializing NotesView instance', () => {
    test('dependency inject NotesModel instance into NotesView', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const notesModel = new NotesModel();
      notesModel.addNotes("Milk")
      notesModel.addNotes("Tea")

      const notesView = new NotesView(notesModel);
      notesView.displayNotes();
      
      expect(document.querySelectorAll('div.note').length).toBe(2)

    })
    
  })
  
})
