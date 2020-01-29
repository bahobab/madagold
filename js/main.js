const scroll = new SmoothScroll('.navbar a[href*="#"]', {speed: 800});
const sideMenu = document.querySelector(".side-menu");
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", event => {
  menuButton
    .classList
    .toggle("open");

  sideMenu
    .classList
    .toggle("show-menu");
});

sideMenu.addEventListener('click', e => {
  sideMenu
    .classList
    .remove('show-menu');

  menuButton
    .classList
    .toggle("open");
})