const NotesApi = require('./notesApi.js')
require('jest-fetch-mock').enableMocks()

describe('NotesApi', () => {
  describe('loadNotes()', () => {
    test('should load data from endpoint and call callback funciton', () => {
      const notesApi = new NotesApi();
      fetch.mockResponseOnce(JSON.stringify({
        note: 'a fetched note'
      }));

      notesApi.loadNotes('url', (note_data) => {
        expect(note_data.note).toBe('a fetched note')
      })
    })
  })
})