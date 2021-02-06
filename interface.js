  var notelist = new Notelist;
  var notecontroller = new NoteController(notelist)
  

  window.addEventListener("hashchange", function() {
    var noteid = window.location.hash.split('#notes/')[1]
    notecontroller.displayIndividualNote(noteid)
    document.getElementById('return-to-notelist').addEventListener('click', function(event) {
      notecontroller.displayNotes();
    })
  })
  
  document.getElementById('createnote').addEventListener('submit', function(event) {
    event.preventDefault();
    newnotetext = document.getElementById('notetocreate').value;
    document.getElementById('notetocreate').value = '';
    notecontroller.addNote(newnotetext);
    notecontroller.displayNotes();
  })
