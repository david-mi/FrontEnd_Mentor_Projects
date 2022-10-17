const mobileToggleButton = document.querySelector(".header--mobile-button");
const navMenu = document.querySelector(".header--nav")
mobileToggleButton.addEventListener("click", () => {
  navMenu.classList.toggle("display")
})