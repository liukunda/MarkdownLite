// This script loads necessary content for the app

window.onload = () => {
  // Add event listener for "load" button
  document.getElementById("load").addEventListener("click", () => {
    // Open the file opening dialog
    document.getElementById("fileLoader").click();
    // Call load() once the user selected a file
    document.getElementById("fileLoader").onchange = load;
  });

  // "editor" div
  var editor = document.getElementById("editor");
  // "display" div
  var display = document.getElementById("display");
  // Dialog used to choose file type for saving
  var filetypeDialog = document.getElementById("filetypeDialog");
  // Button to open filetypeDialog
  var openFiletypeDialog = document.getElementById("openFiletypeDialog");
  // Cheats sheet
  var cheatsSheet = document.getElementById("cheats-sheet");
  // About this
  var aboutThis = document.getElementById("about-this");

  // At each char input in "editor", the script call parse()
  editor.addEventListener("input", () => {
    parse();
  });
  
  // Displays filetypeDialog
  openFiletypeDialog.onclick = () => { filetypeDialog.style.display = "block";}

  // Removes filetypeDialog if the user clicks outside
  window.onclick = (event) => {
    if (event.target.id == "filetypeDialog") {
      filetypeDialog.style.display = "none";
      editor.focus();
    }
    else if (event.target.id == "cheats-sheet") {
      cheatsSheet.style.display = "none";
      editor.focus();
    }
    else if (event.target.id == "about-this") {
      aboutThis.style.display = "none";
      editor.focus();
    }
  }

  window.addEventListener("keydown", (event) => {
    if (event.code == "Escape"){
      if (window.getComputedStyle(filetypeDialog).display == "block") filetypeDialog.style.display = "none";
      if (window.getComputedStyle(cheatsSheet).display == "block") cheatsSheet.style.display = "none";
      if (window.getComputedStyle(aboutThis).display == "block") aboutThis.style.display = "none";
    }
  });
}

