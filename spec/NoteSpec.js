describe ('Note', function() {
  var note;
  beforeEach(function() {
    note = new Note();
  });
  it('is an instance of Note', function() {
    expect(note).toBeInstanceOf(Note);
  })
});