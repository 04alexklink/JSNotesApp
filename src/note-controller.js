var app = document.getElementById('app');
var note1 = new Note("Take out bins");
var note2 = new Note("Take out the bins again")
var notelist = new Notelist();
notelist.addNote(note1);
notelist.addNote(note2);
var notelistview = new Notelistview(notelist);
console.log(notelistview);
app.innerHTML=`${notelistview.viewNotes()}`;
