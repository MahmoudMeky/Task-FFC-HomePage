let mobileMenuIcon = document.querySelector(".mobile-menu");
let navBarLinks = document.querySelector("header .nav-links ");
let navBarIcons = document.querySelector("header nav .icons");

mobileMenuIcon.addEventListener("click", () => {
  [navBarLinks, navBarIcons].forEach((el) => {
    el.classList.toggle("mobile");
  });
});

// Intialize Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-arrow-right",
    prevEl: ".swiper-arrow-left",
  },
});

// Intialize Catgeories Swiper

const swiper2 = new Swiper(".categories-swipper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 2,
  loop: true,
  centredSlides: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 9,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-navigations .swiper-arrow-right2",
    prevEl: ".swiper-navigations .swiper-arrow-left2",
  },
});

// Like Button

let likeButtons = document.querySelectorAll(".product .like");
likeButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    let [outlineIcon, fillIcon] = btn.children;
    outlineIcon.classList.toggle("hidden");
    fillIcon.classList.toggle("hidden");
  })
);
