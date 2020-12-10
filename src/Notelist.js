class Notelist {
  constructor() {
    this._notesStored = [];
    this._id = 0
  }

  addNote(text) {
    var note = new Note(text, this._id);
    this._id += 1
    this._notesStored.push(note);
  };

  returnNotes() {
    return this._notesStored;
  };
};