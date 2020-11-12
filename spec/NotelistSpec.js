describe('Notelist', function() {
  var notelist;
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
});