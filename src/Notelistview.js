class Notelistview {
  viewNotesFirst20Chars(notelist) {
    var notelist = notelist;
    var htmllist = ``;
    notelist.returnNotes().forEach((note) => {
      htmllist += `<li><a href='#notes/${note.viewID()}'>${note.viewContent().substring(0,20)} ...</a></li>`
    })
    if(htmllist !== ``) {
      return `<h1>Your notelist</h1><ul>${htmllist}</ul>`;
    }
  };
};