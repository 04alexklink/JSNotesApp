describe('Notelistview', function() {
  var notelistview;
  var notelist;
  describe('#viewNotesFirst20Chars', function() {
    it('returns nothing if notelist is empty', function() {
      notelistview = new Notelistview();
      expect(notelistview.viewNotesFirst20Chars()).toEqual();
    })
    it('returns the right htmllist for one note in notelist', function() {
      notelist = new Notelist();
      notelist.addNote("Take out the bins");
      notelistview = new Notelistview(notelist);
      expect(notelistview.viewNotesFirst20Chars()).toEqual("<ul><li><div>Take out the bins</div></li></ul>")
    })
    it('returns the right htmllist for >1 note in notelist', function() {
      notelist = new Notelist();
      notelist.addNote("Take out the bins");
      notelist.addNote("Walk the dog");
      notelistview = new Notelistview(notelist);
      expect(notelistview.viewNotesFirst20Chars()).toEqual("<ul><li><div>Take out the bins</div></li><li><div>Walk the dog</div></li></ul>");
    })
    it('only shows first 20 characters of a note', function() {
      notelist = new Notelist();
      notelist.addNote("Take out the bins, walk the dog, and eat 5 pieces of fruit and veg")
      notelistview = new Notelistview(notelist)
      expect(notelistview.viewNotesFirst20Chars()).toEqual("<ul><li><div>Take out the bins, w</div></li></ul>")
    })
  })
});