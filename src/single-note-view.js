class SingleNoteView {
  constructor(note) {
    this._note = note.viewContent();
  }

  showNote() {
    var notehtml = `<div>${this._note}</div>`
    return notehtml;
  }
}

note = new Note("Take the bins out");
singlenoteview = new SingleNoteView(note);

console.log(singlenoteview.showNote());