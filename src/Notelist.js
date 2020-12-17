class Notelist {
  constructor(noteClass = Note) {
    this._notesStored = [];
    this._id = 0;
    this.noteClass = noteClass;
  }

  addNote(text) {
    var note = new this.noteClass(text, this._id);
    this._id += 1
    this._notesStored.push(note);
  };

  returnNotes() {
    return this._notesStored;
  };
};