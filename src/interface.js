var notelist = new Notelist;
var notecontroller = new NoteController(notelist)
notecontroller.displayNotes()

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