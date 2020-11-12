describe('Notelist', function() {
  var notelist;
  var note;
  describe('instantiation', function() {
      beforeEach(function() {
        notelist = new Notelist();
      });
    it('can be instantiated', function() {
        expect(notelist).toBeInstanceOf(Notelist);
      });
    it('has an empty array by default', function() {
      expect(notelist._notesStored).toEqual([]);
    });
  });
  describe('#addNote', function() {
    it('can add a note and store it', function() {
      note = new Note("Take the bins out");
      notelist = new Notelist();
      notelist.addNote(note);
      expect(notelist._notesStored.length).toEqual(1);
    });
  });
});