class Notelistview {
  constructor(notelist = new Notelist()) {
    this._notelist = notelist.returnNotes();
  };

  viewNotesFirst20Chars() {
    var htmllist = ``;
    this._notelist.forEach((note) => {
      htmllist += `<li><a href='#notes/${note.viewID()}'>${note.viewContent().substring(0,20)}</a></li>`
    })
    if(htmllist !== ``) {
      return `<ul>${htmllist}</ul>`;
    }
  };
};