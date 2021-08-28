window.onload = pageLoad;

const welcomeSection = document.querySelector(".welcome_section");

let onLoadViewportHeight = window.innerHeight;
let hideHeader;

function pageLoad() {
  changesOnLoadHeader();
  // header.style.visibility = "collapse";
  header.style.display = "none";
  hideHeader = true;
}

// SETUP FOR HEADER ON LOAD AND RESIZE

function changesOnLoadHeader() {
  navMenu.style.right = "-100%";
  navMenu.style.opacity = "0";
  menuActive = false;
  return;
}
