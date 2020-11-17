describe ('Note', function() {
  var note;
  describe('#viewContent', function() {
    it('shows the note content that has been passed in as a parameter upon instantiation', function() {
      note = new Note("Take out the bins");
      expect(note.viewContent()).toEqual("Take out the bins");
    })
  })
});