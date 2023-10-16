let bar = document.querySelector(".bar");
let close = document.querySelector(".close");
let mobile_nav = document.querySelector(".mobile_nav");
let desktop_nav = document.querySelector(".desktop_nav");
let slides = document.querySelectorAll(".slide");
let dot_container = document.querySelector(".dot_container");

let slideCount = 0;

showSlides(slideCount);

let interval = setInterval((_) => {
  if (slideCount == slides.length - 1) {
    slideCount = -1;
  }
  showSlides(++slideCount);
}, 2000);

bar.addEventListener("click", (_) => {
  mobile_nav.classList.toggle("none");
});
close.addEventListener("click", (_) => {
  mobile_nav.classList.toggle("none");
});

dot_container.addEventListener("click", (e) => {
  let elem;
  if (e.target.tagName != "SPAN") return "";
  elem = e.target;

  let order = Number(elem.dataset.order);
  showSlides(order);

  clearInterval(interval);
  interval = setInterval((_) => {
    if (slideCount == slides.length - 1) {
      slideCount = -1;
    }
    showSlides(++slideCount);
  }, 2000);
});

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("flex");
    slides[i].classList.add("none");
    dot_container.children[i].classList.remove("active");
  }
  slides[n].classList.remove("none");
  slides[n].classList.add("flex");
  dot_container.children[n].classList.add("active");
  slideCount = n;
}
