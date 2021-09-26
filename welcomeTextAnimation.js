const text1 = document.getElementById("welcome_1");
const text2 = document.getElementById("welcome_2");
const text3 = document.getElementById("welcome_3");

function animateWelcomeTexts() {
  setTimeout(() => {
    text1.style.opacity = "0";
  }, 3000);
  setTimeout(() => {
    text1.style.display = "none";
  }, 3500);
  setTimeout(() => {
    text2.style.display = "block";
  }, 3500);
  setTimeout(() => {
    text2.style.opacity = "1";
  }, 3550);
  setTimeout(() => {
    text3.style.opacity = "1";
  }, 7500);
}
