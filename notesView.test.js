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

  describe('', () => {
    test('should see added notes when button clicked', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const notesModel = new NotesModel();
      const notesView = new NotesView(notesModel);

      const button = document.querySelector('#add-note-button');
      const note_input = document.querySelector('#note-input');

      note_input.value = "Hi there!" // This might not work
      button.click();
      button.click();

      expect(document.querySelectorAll('div.note')[0].textContent).toEqual("Hi there!") // This might not work
      expect(document.querySelectorAll('div.note').length).toEqual(2) // This might not work
      
    })

  })
  
})
