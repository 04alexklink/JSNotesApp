// 1.) Just interacting with the DOM in a non-controlled way
// var app = document.getElementById('app');
// var notelist = new Notelist();
// notelist.addNote("Take the bins out");
// notelist.addNote("Walk the dog");
// var notelistview = new Notelistview(notelist);
// app.innerHTML=`${notelistview.viewNotesFirst20Chars()}`;
//2.) Functional programming (I think?) DOM control
// NoteController();
// function NoteController() {
//   notelist = new Notelist()
//   notelist.addNote("Take the bins out")
//   notelist.addNote("Walk the dog")
//   notelistview = new Notelistview(notelist)
//   showNotes()
// }
// function showNotes() {
//   document
//     .getElementById("app")
//     .innerHTML = `${notelistview.viewNotesFirst20Chars()}`
// }

// 3.) OOP Class syntax for DOM control
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
        var singlenoteview = new SingleNoteView(note)
        var app = document.getElementById('app')
        app.innerHTML= `${singlenoteview.showNote()}`
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
// 4.) OOP Prototype Syntax DOM control
