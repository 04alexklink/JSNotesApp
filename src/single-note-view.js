class SingleNoteView {
  constructor(note) {
    this._note = note.viewContent();
  }

  showNote() {
    return `<div>${this._note}</div>`
  }
}
