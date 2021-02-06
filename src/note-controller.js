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
    var noteList = document.getElementById('note-list');
    noteList.className="note-list"
    noteList.innerHTML= this._notelistview.viewNotesFirst20Chars(this._notelist);
  }

  displayIndividualNote(idofnote) {
    this._notelist.returnNotes().forEach((note) => {
      if(note.viewID() == idofnote) {
        var noteList = document.getElementById('note-list')
        var html = "<button class='button' id='return-to-notelist'>Return to your notelist</button>"
        noteList.innerHTML= `<h1>${this._singlenoteview.showNote(note)}</h1>${html}`
      }
    })
  }
}



