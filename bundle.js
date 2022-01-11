(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNotes(input) {
          return this.notes.push(input);
        }
        reset() {
          return this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var notesModel = new NotesModel();
  console.log(notesModel.getNotes());
})();
