const toggleNavMenuButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav_list");

let menuActive = false;

toggleNavMenuButton.addEventListener("click", () => {
  if (menuActive) {
    toggleInactive();
    toggleNavButtonLinesInactive();
    return;
  }

  if (!menuActive) {
    toggleActive();
    toggleNavButtonLinesActive();
    return;
  }
});

navMenu.addEventListener("click", () => {
  toggleInactive();
  toggleNavButtonLinesInactive();
  return;
});

function toggleInactive() {
  navMenu.style.right = "-100%";
  // navMenu.style.left = "-100%";
  navMenu.style.opacity = "0";
  menuActive = !menuActive;
  return;
}

function toggleActive() {
  navMenu.style.right = "0";
  // navMenu.style.left = "0";
  navMenu.style.opacity = "1";
  menuActive = !menuActive;
  return;
}
