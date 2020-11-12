class Notelist {
  constructor() {
    this._notesStored = [];
  }

  addNote(note) {
    this._notesStored.push(note);
  };

  viewNotes() {
    return this._notesStored.map(function(note) {
      return note._content});
  };
};