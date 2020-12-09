// var app = document.getElementById('app');
// var notelist = new Notelist();
// notelist.addNote("Take the bins out");
// notelist.addNote("Walk the dog");
// var notelistview = new Notelistview(notelist);
// app.innerHTML=`${notelistview.viewNotes()}`;

class NoteController {
  constructor(notelist) {
    this._notelist = notelist;
    this._notelist.addNote("Take the bins out");
    this._notelist.addNote("Walk the dog");
    this._notelistview = new Notelistview(this._notelist)
    }

  showNotes() {
    var app = document.getElementById('app');
    app.innerHTML= this._notelistview.viewNotes();
  }
}

var notelist = new Notelist;
notecontroller = new NoteController(notelist)
notecontroller.showNotes()