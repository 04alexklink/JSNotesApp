describe ('Note', function() {
  var note;

  beforeEach(function() {
    note = new Note();
  });

  it('is an instance of Note', function() {
    expect(note).toBeInstanceOf(Note);
  })
  
  describe('#viewContent', function() {
    it('contains a string of text when instantiated', function() {
      note = new Note("Take out the bins");
      expect(note.viewContent()).toEqual("Take out the bins");
    })
  })
});