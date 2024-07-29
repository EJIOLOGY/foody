"use strict";
document.getElementById("nav-toggle").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("show");
});

const swiper = new Swiper(".slide-content", {
  // Optional parameters
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 25,
  grabCursor: true,
  loop: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
