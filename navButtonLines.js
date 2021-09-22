const line1 = document.querySelector("#line-1");
const line2 = document.querySelector("#line-2");
const line3 = document.querySelector("#line-3");

function toggleNavButtonLinesActive() {
  line1.classList.add("active-line");
  line2.classList.add("active-line");
  line3.classList.add("active-line");
}

function toggleNavButtonLinesInactive() {
  line1.classList.remove("active-line");
  line2.classList.remove("active-line");
  line3.classList.remove("active-line");
}

// function toggleNavButtonLines() {
//   if (menuActive) {
//     // console.log("active works");
//     line1.classList.add("active-line");
//     line2.classList.add("active-line");
//     line3.classList.add("active-line");
//   }
//   if (!menuActive) {
//     // console.log("inactive works");
//     line1.classList.remove("active-line");
//     line2.classList.remove("active-line");
//     line3.classList.remove("active-line");
//   }
// }
