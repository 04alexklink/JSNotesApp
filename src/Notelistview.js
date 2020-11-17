class Notelistview {
  constructor(notelist) {
    this._notelist = notelist;
  };

  viewNotes() {
    var htmllist = "";
    var array = this._notelist.returnNotes()
    array.forEach((note) => {
      htmllist += `<ul><li>${note.viewContent()}</li></ul>`;
    })
    return htmllist;
  };
};