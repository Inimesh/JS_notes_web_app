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
}

module.exports = NotesModel;