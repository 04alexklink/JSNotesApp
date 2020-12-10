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
      expect(notelistview.viewNotesFirst20Chars()).toEqual("<ul><li><a href='#notes/0'>Take out the bins</a></li></ul>")
    })
    it('returns the right htmllist for >1 note in notelist', function() {
      notelist = new Notelist();
      notelist.addNote("Take out the bins");
      notelist.addNote("Walk the dog");
      notelistview = new Notelistview(notelist);
      expect(notelistview.viewNotesFirst20Chars()).toEqual("<ul><li><a href='#notes/0'>Take out the bins</a></li><li><a href='#notes/1'>Walk the dog</a></li></ul>");
    })
    it('only shows first 20 characters of a note', function() {
      notelist = new Notelist();
      notelist.addNote("Take out the bins, walk the dog, and eat 5 pieces of fruit and veg")
      notelistview = new Notelistview(notelist)
      expect(notelistview.viewNotesFirst20Chars()).toEqual("<ul><li><a href='#notes/0'>Take out the bins, w</a></li></ul>")
    })
  })
});