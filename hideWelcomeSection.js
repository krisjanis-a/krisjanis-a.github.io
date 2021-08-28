const aboutSection = document.getElementById("about");

let distance = aboutSection.getBoundingClientRect();

function hideWelcomeSection() {
  let welcomeScrollPosition = window.scrollY;
  let distance = aboutSection.getBoundingClientRect();
  if (onLoadViewportHeight - welcomeScrollPosition >= 0 && hideHeader) {
    // hide header
    // header.style.visibility = "collapse";
    header.style.display = "none";
  }

  if (distance.top <= 0) {
    hideHeader = false;
    welcomeSection.style.display = "none";
    // header.style.visibility = "visible";
    header.style.display = "block";
  }
}

document.addEventListener("scroll", () => {
  hideWelcomeSection();
});
