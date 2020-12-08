class Notelistview {
  constructor(notelist = new Notelist()) {
    this._notelist = notelist.returnNotes();
  };

  viewNotes() {
    var htmllist = ``;
    this._notelist.forEach((note) => {
      htmllist += `<li><div>${note.viewContent()}</div></li>`
    })
    if(htmllist !== ``) {
      return `<ul>${htmllist}</ul>`;
    }
  };
};