describe("SingleNoteView", function() {
  describe("showNote", function() {
    it("takes a note object and returns the note text in interpolated string output", function() {
      var note = new Note("Take the bins out");
      var singlenoteview = new SingleNoteView(note);
      expect(singlenoteview.showNote()).toEqual("<div>Take the bins out</div>")
    })
  })
})