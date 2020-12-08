describe('Notelistview', function() {
  var notelistview;
  var notelist;
  describe('#viewNotes', function() {
    it('returns nothing if notelist is empty', function() {
      notelistview = new Notelistview();
      expect(notelistview.viewNotes()).toEqual();
    })
    it('returns the right htmllist for one note in notelist', function() {
      notelist = new Notelist();
      notelist.addNote("Take out the bins");
      notelistview = new Notelistview(notelist);
      expect(notelistview.viewNotes()).toEqual("<ul><li><div>Take out the bins</div></li></ul>")
    })
    it('returns the right htmllist for >1 note in notelist', function() {
      notelist = new Notelist();
      notelist.addNote("Take out the bins");
      notelist.addNote("Walk the dog");
      notelistview = new Notelistview(notelist);
      expect(notelistview.viewNotes()).toEqual("<ul><li><div>Take out the bins</div></li><li><div>Walk the dog</div></li></ul>");
    })
  })
});