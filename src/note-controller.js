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
    this._notelist.addNote("Take the bins out");
    this._notelist.addNote("Walk the dog");
    this._notelist.addNote("This note is greater than 20 characters but won't show completely in the browser")
    this._notelistview = new Notelistview(this._notelist)
    }

  showNotes() {
    var app = document.getElementById('app');
    app.innerHTML= this._notelistview.viewNotesFirst20Chars();
  }
}

var notelist = new Notelist;
notecontroller = new NoteController(notelist)
notecontroller.showNotes()
// 4.) OOP Prototype Syntax DOM control
