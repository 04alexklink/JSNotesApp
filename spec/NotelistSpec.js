describe('Notelist', function() {
  var notelist;
  beforeEach(function() {
    notelist = new Notelist();
  });
  describe('#addNote', function() {
    it('creates a note and stores it', function() {
      notelist.addNote("Take the bins out");
      expect(notelist.returnNotes()[0]).toBeInstanceOf(Note);
      expect(notelist.returnNotes()[0].viewContent()).toEqual("Take the bins out");
    });
  });
  describe('#returnNotes', function() {
    it('returns all the notes it is storing in the order they are added', function() {
      notelist.addNote("Take the bins out");
      notelist.addNote("Exercise for half an hour");
      expect(notelist.returnNotes().length).toEqual(2);
      expect(notelist.returnNotes()[0].viewContent()).toEqual("Take the bins out");
      expect(notelist.returnNotes()[1].viewContent()).toEqual("Exercise for half an hour");
    });
  });
});