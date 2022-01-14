const NotesApi = require('./notesApi.js')
require('jest-fetch-mock').enableMocks()

describe('NotesApi', () => {
  describe('loadNotes()', () => {
    test('should load data from endpoint and call callback function', () => {
      const notesApi = new NotesApi();
      fetch.mockResponseOnce(JSON.stringify({
        note: 'a fetched note'
      }));

      notesApi.loadNotes('url', (note_data) => {
        expect(note_data.note).toBe('a fetched note')
      })
    })
  })

  describe('createNote()', () => {
    test('should send a POST request to the server', () => {
      const notesApi = new NotesApi();

      const noteBody = 'new note';
      const url = 'url';
      fetch.mockResponseOnce(JSON.stringify([
        noteBody
      ]))

      notesApi.createNote(url, noteBody, (notes_arr) => {
        expect(notes_arr).toContain(noteBody);
      })
      expect(fetch).toHaveBeenCalledWith(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
          content: noteBody
        })
      });
    })
    
  })
  
})