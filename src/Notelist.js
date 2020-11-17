class Notelist {
  constructor() {
    this._notesStored = [];
  }

  addNote(note) {
    this._notesStored.push(note);
  };

  returnNotes() {
    return this._notesStored;
  };
};