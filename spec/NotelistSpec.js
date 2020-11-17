describe('Notelist', function() {
  var notelist;
  var note1;
  var note2;
  beforeEach(function() {
    notelist = new Notelist();
    note1 = new Note("Take the bins out");
    note2 = new Note("Exercise");
  });
  describe('#addNote', function() {
    it('can add a note and store it', function() {
      notelist.addNote(note1);
      notelist.addNote(note2);
      expect(notelist._notesStored.length).toEqual(2);
    });
  });
  describe('#returnNotes', function() {
    it('returns all the notes it is storing', function() {
      notelist.addNote(note1);
      notelist.addNote(note2);
      expect(notelist.returnNotes()).toEqual([note1, note2]);
    });
  });
});