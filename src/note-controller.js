class NoteController {
  constructor(notelist = new Notelist(), notelistview = new Notelistview(), singlenoteview = new SingleNoteView()) {
    this._notelist = notelist;
    this._notelistview = notelistview;
    this._singlenoteview = singlenoteview;
  }

  addNote(notetext) {
    this._notelist.addNote(notetext)
  }

  displayNotes() {
    if(this._notelist.returnNotes().length >0) {
    var app = document.getElementById('app');
    app.innerHTML= this._notelistview.viewNotesFirst20Chars(this._notelist);
    }
  }

  displayIndividualNote(idofnote) {
    this._notelist.returnNotes().forEach((note) => {
      if(note.viewID() == idofnote) {
        var app = document.getElementById('app')
        app.innerHTML= `${this._singlenoteview.showNote(note)}`
      }
    })
  }
}



