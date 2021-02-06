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
    var newnotetext = document.getElementById('notetocreate').value;
    document.getElementById('notetocreate').value = '';
    emojifyNote(newnotetext)
  })

  function emojifyNote(noteContent) {
    var note = {text : noteContent}
    noteJSON = JSON.stringify(note);
    fetch('https://makers-emojify.herokuapp.com/', {
	    method: 'POST',
	    body: noteJSON,
	    headers: {
		    'Content-type': 'application/json'
	    }
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    }).then(function (data) {
      notecontroller.addNote(data.emojified_text);
      notecontroller.displayNotes();
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    });
   }