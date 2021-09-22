// JavaScript Document



var deButton = document.querySelector("button");
var deNav = document.querySelector("nav:first-of-type")

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  deNav.classList.toggle("toonMenu");
}


