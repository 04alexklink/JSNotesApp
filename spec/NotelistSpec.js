describe('Notelist', function() {
  var notelist;
  var note1;
  var note2;
  beforeEach(function() {
    notelist = new Notelist();
    note1 = new Note("Take the bins out");
    note2 = new Note("Exercise");
  });
  describe('instantiation', function() {
    it('can be instantiated', function() {
        expect(notelist).toBeInstanceOf(Notelist);
      });
    it('has an empty array by default', function() {
      expect(notelist._notesStored).toEqual([]);
    });
  });
  describe('#addNote', function() {
    it('can add a note and store it', function() {
      notelist.addNote(note1);
      notelist.addNote(note2);
      expect(notelist._notesStored.length).toEqual(2);
    });
  });
  describe('#viewNotes', function() {
    it('returns the content of each note it is storing', function() {
      notelist.addNote(note1);
      notelist.addNote(note2);
      expect(notelist.viewNotes()).toEqual(["Take the bins out", "Exercise"]);
    });
  });
});