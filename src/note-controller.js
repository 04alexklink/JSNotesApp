var app = document.getElementById('app');
var note = new Note("Take out bins");
var notelist = new Notelist();
notelist.addNote(note);
var notelistview = new Notelistview(notelist);
// console.log(notelistview);
// app.innerHTML=`${notelistview.viewNotes()}`;
