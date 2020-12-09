class Notelistview {
  constructor(notelist = new Notelist()) {
    this._notelist = notelist.returnNotes();
  };

  viewNotesFirst20Chars() {
    var htmllist = ``;
    this._notelist.forEach((note) => {
      htmllist += `<li><div>${note.viewContent().substring(0,20)}</div></li>`
    })
    if(htmllist !== ``) {
      return `<ul>${htmllist}</ul>`;
    }
  };
};