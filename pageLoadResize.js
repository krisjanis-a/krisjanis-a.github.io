window.onload = pageLoad;

function pageLoad() {
  changesOnLoadHeader();
}

// SETUP FOR HEADER ON LOAD AND RESIZE

function changesOnLoadHeader() {
  navMenu.style.right = "-100%";
  navMenu.style.opacity = "0";
  menuActive = false;
  return;
}
