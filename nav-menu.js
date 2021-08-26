const toggleNavMenuButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");

let menuActive = false;

toggleNavMenuButton.addEventListener("click", () => {
  if (menuActive) {
    toggleInactive();
    return;
  }

  if (!menuActive) {
    toggleActive();
    return;
  }
});

navMenu.addEventListener("click", () => {
  toggleInactive();
  return;
});

function toggleInactive() {
  navMenu.style.right = "-110%";
  navMenu.style.opacity = "0";
  menuActive = !menuActive;
  return;
}

function toggleActive() {
  navMenu.style.right = "0";
  navMenu.style.opacity = "1";
  menuActive = !menuActive;
  return;
}
