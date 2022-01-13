class NotesModel {
  constructor(){
    this.notes = []
  }
  getNotes() {
    return this.notes
  }

  addNotes(input) {
   return this.notes.push(input)
  }

  reset(){
    return this.notes = []
  }

  setNotes(notes) {
    return this.notes = notes;
  }
}

module.exports = NotesModel;