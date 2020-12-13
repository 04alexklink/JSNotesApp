class Note {
  constructor(note, id) {
    this._content = note;
    this._id = id;
  }

  viewContent() {
    return this._content;
  }

  viewID() {
    return this._id;
  }
}