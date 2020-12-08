describe('Notelistview', function() {
  var notelistview;
  var notelist;
  xit('stores a notelist object', function() {
    notelist = new Notelist();
    notelistview = new Notelistview(notelist);
    expect(notelistview._notelist).toEqual(notelist);
  });
  describe('#viewNotes', function() {
    xit('returns nothing if notelist is empty', function() {
      notelist = new Notelist();
      notelistview = new Notelistview(notelist);
      expect(notelistview.viewNotes()).toEqual("");
    })
    xit('returns the right htmllist for one note in notelist', function() {
      note = new Note("Take out the bins");
      notelist = new Notelist();
      notelist.addNote(note);
      notelistview = new Notelistview(notelist);
      expect(notelistview.viewNotes()).toEqual("<ul><li>Take out the bins</li></ul>")
    })
    xit('returns the right htmllist for >1 note in notelist', function() {
      note1 = new Note("Take out the bins");
      note2 = new Note("Walk the dog");
      notelist = new Notelist();
      notelist.addNote(note1);
      notelist.addNote(note2);
      notelistview = new Notelistview(notelist);
      expect(notelistview.viewNotes()).toEqual("<ul><li>Take out the bins</li></ul><ul><li>Walk the dog</li></ul>");
    })
  })
});