describe ('Note', function() {
  var note;
  describe('#viewContent', function() {
    it('shows the note content that has been passed in as a parameter upon instantiation', function() {
      note = new Note("Take out the bins");
      expect(note.viewContent()).toEqual("Take out the bins");
    })
  })
  describe('#viewID', function() {
    it('shows the id of the note that is passed in upon instantiation', function() {
      note = new Note("Take out the bins", 0)
      expect(note.viewID()).toEqual(0)
    })
  })
});