const doc = document.documentElement;
const header = document.querySelector("header");
const hideHeaderButton = document.getElementById("hideHeaderButton");

let currentScroll = (prevScroll = window.scrollY || doc.scrollTop);
let currentDirection = (prevDirection = 0);
let treshold = 92;
let toggled;

function checkScroll() {
  currentScroll = window.scrollY || doc.scrollTop;
  if (currentScroll > prevScroll) {
    // scrolled down
    // console.log("scroll down");
    currentDirection = 2;
  } else {
    //scrolled up
    // console.log("scroll up");
    currentDirection = 1;
  }

  if (currentDirection !== prevDirection) {
    toggled = toggleHeader();
  }

  if (toggled) {
    prevDirection = currentDirection;
  }

  if (currentScroll < 92) {
    hideHeaderButton.style.display = "none";
  }
  if (currentScroll > 92) {
    hideHeaderButton.style.display = "flex";
  }
  prevScroll = currentScroll;
}

hideHeaderButton.addEventListener("click", () => {
  header.classList.add("hide");
  prevScroll = 0;
  toggleInactive();
  toggleNavButtonLinesInactive();
});

function toggleHeader() {
  toggled = true;
  if (currentDirection === 2 /*&& currentScroll > treshold*/) {
    header.classList.add("hide");
    toggleInactive();
    toggleNavButtonLinesInactive();
  } else if (currentDirection === 1) {
    header.classList.remove("hide");
  } else {
    toggled = false;
  }
  return toggled;
}

window.addEventListener("scroll", checkScroll);
