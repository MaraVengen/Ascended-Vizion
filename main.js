window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Javascript for responsive nsvigation menu
var menu = document.querySelector(".navbar");
var menuBtn = document.querySelector(".menu-btn");
var closedBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closedBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
// Scroll Reveal
/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   origin: "top",
//   distance: "60px",
//   duration: 2500,
//   delay: 400,
//   reset: true,
// });

// sr.reveal(".story");
// // sr.reveal('.home__image', {origin: 'bottom'})
// sr.reveal(".about-text", { origin: "left" });
// sr.reveal(".about-image", { origin: "right" });
// sr.reveal(".utilities-card", { interval: 100 });
