const navMenu = document.getElementById("nav__menu"),
  navToggle = document.getElementById("nav__toggle"),
  navClose = document.getElementById("nav__close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}
