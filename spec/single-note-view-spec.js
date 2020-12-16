describe("SingleNoteView", function() {
  describe("showNote", function() {
    it("takes a note object and returns the note text in interpolated string output", function() {
      class NoteDouble {
        viewContent() {
          return "Take the bins out";
        }
      }
      notedouble = new NoteDouble();
      var singlenoteview = new SingleNoteView();
      expect(singlenoteview.showNote(notedouble)).toEqual("<div>Take the bins out</div>")
    })
  })
})