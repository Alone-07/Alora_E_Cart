let bar = document.querySelector(".bar");
let close = document.querySelector(".close");
let container = document.querySelector(".container");
let mobile_nav = document.querySelector(".mobile_nav");
let desktop_nav = document.querySelector(".desktop_nav");

bar.addEventListener("click", (_) => {
  mobile_nav.classList.toggle("none");
});
close.addEventListener("click", (_) => {
  mobile_nav.classList.toggle("none");
});
