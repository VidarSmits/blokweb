// JavaScript Document



var deButton = document.querySelector("button");
var span1 = document.querySelector("button span:nth-of-type(1)")
var span2 = document.querySelector("button span:nth-of-type(3)")
var deNav = document.querySelector(".nav")

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  deNav.classList.toggle("toonMenu");
  span1.classList.toggle("toonMenu");
  span2.classList.toggle("toonMenu");
}


