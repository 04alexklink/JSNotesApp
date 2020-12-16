class NoteController {
  constructor(notelist) {
    this._notelist = notelist;
  }

  addNote(notetext) {
    this._notelist.addNote(notetext)
  }

  displayNotes() {
    if(this._notelist.returnNotes().length >0) {
    var app = document.getElementById('app');
    var notelistview = new Notelistview(this._notelist);
    app.innerHTML= notelistview.viewNotesFirst20Chars();
    }
  }

  displayIndividualNote(idofnote) {
    this._notelist.returnNotes().forEach((note) => {
      if(note.viewID() == idofnote) {
        var singlenoteview = new SingleNoteView()
        var app = document.getElementById('app')
        app.innerHTML= `${singlenoteview.showNote(note)}`
      }
    })
  }
}

window.addEventListener("hashchange", function() {
  var noteid = window.location.hash.split('#notes/')[1]
  notecontroller.displayIndividualNote(noteid)
})

document.getElementById('createnote').addEventListener('submit', function(event) {
  event.preventDefault();
  newnotetext = document.getElementById('notetocreate').value;
  notecontroller.addNote(newnotetext);
  notecontroller.displayNotes();
})

var notelist = new Notelist;
notecontroller = new NoteController(notelist)
notecontroller.displayNotes()

