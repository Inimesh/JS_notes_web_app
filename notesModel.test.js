// const { it, expect } = require("@jest/globals");
const NotesModel = require('./notesModel')

describe("notesModel", () => {

  describe("#getNotes", () => {
    test('returns an empty array', () => {
      const model = new NotesModel()
      expect(model.getNotes()).toEqual([])
    })
  })
  describe('#addNotes', () => {
    test('should add notes', () => {
      const model = new NotesModel()
      model.addNotes('milk')
      model.addNotes('tea')
      expect(model.getNotes()).toEqual(['milk', 'tea'])
    })
    
  })
  describe('#reset', () => {
    test('should clear any added notes', () => {
      const model = new NotesModel()
      model.addNotes('milk')
      model.addNotes('tea')
      model.reset()
      expect(model.getNotes()).toEqual([])
    })
    
  })
  

});
