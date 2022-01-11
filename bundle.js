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

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(model = NotesModel2) {
          this.model = model;
        }
        displayNotes() {
          this.model.getNotes().forEach((str) => {
            const elem = document.createElement("div");
            elem.appendChild(document.createTextNode(str));
            elem.setAttribute("class", "note");
            document.body.appendChild(elem);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var notesModel = new NotesModel();
  notesModel.addNotes("This is an example note");
  var notesView = new NotesView(notesModel);
  notesView.displayNotes();
})();
