const hamburgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

let isMenuOpen = false;

hamburgerMenu.addEventListener("touchstart", () => {
  if (isMenuOpen) {
    hamburgerMenu.classList.remove("hamburger_active");
    menu.classList.remove("menu_active");
    isMenuOpen = false;
  } else {
    hamburgerMenu.classList.add("hamburger_active");
    menu.classList.add("menu_active");
    isMenuOpen = true;
  }
});

menu.addEventListener("touchstart", () => {
  hamburgerMenu.classList.remove("hamburger_active");
  menu.classList.remove("menu_active");
  isMenuOpen = false;
});
