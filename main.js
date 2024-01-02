window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Javascript for responsive nsvigation menu
var menu = document.querySelector(".navbar");
var menuBtn = document.querySelector(".menu-btn");
var closedBtn = document.querySelector(".close-btn");
var menuItems = document.querySelectorAll(".navbar a");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closedBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});

// Swiper
var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth <= 610) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        // slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        resistance: 100,
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

document.getElementById("see-events").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document
  .querySelector(".modal-close-btn")
  .addEventListener("click", function () {
    document.querySelector("bg-modal").style.display = "none";
  });

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".lore-content");
sr.reveal(".hive-card");
// sr.reveal('.home__image', {origin: 'bottom'})
sr.reveal(".about-text", { origin: "left" });
sr.reveal(".enlightened-text", { origin: "left" });
sr.reveal(".about-img", { origin: "right" });
sr.reveal(".enlightened-img", { origin: "right" });
sr.reveal(".utility-card", { interval: 100 });
