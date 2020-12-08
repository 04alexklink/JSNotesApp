class Notelist {
  constructor() {
    this._notesStored = [];
  }

  addNote(text) {
    var note = new Note(text)
    this._notesStored.push(note);
  };

  returnNotes() {
    return this._notesStored;
  };
};