const profileImage = document.querySelector(".profile_image");
const hoverHook = document.querySelector("#hook");

hoverHook.addEventListener("mouseover", () => {
  profileImage.style.opacity = "1";
  hoverHook.addEventListener("mouseout", () => {
    profileImage.style.opacity = "0";
  });
});
