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
        setNotes(notes) {
          return this.notes = notes;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(url, callback) {
          fetch(url).then((response) => {
            return response.json();
          }).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesApi2 = require_notesApi();
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(model = NotesModel2, api = NotesApi2) {
          this.model = model;
          this.api = api;
          document.querySelector("#add-note-button").addEventListener("click", () => {
            document.querySelectorAll(".note").forEach((note) => {
              note.remove();
            });
            this.model.addNotes(document.querySelector("#note-input").value);
            this.displayNotes();
            document.querySelector("#note-input").value = "";
          });
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
  var NotesApi = require_notesApi();
  var notesModel = new NotesModel();
  var notesApi = new NotesApi();
  var notesView = new NotesView(notesModel, notesApi);
  notesView.displayNotes();
  notesApi.loadNotes("http://localhost:3000/notes", (notes) => {
    notesModel.setNotes(notes);
    notesView.displayNotes();
  });
})();
