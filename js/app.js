const backDrop = document.querySelector(".backdrop");
const container = document.querySelector(".container");
const cartBtn = document.querySelector(".cart .cart__btn");
const cart = document.querySelector("header .cart-pop-up");
const mobileMenu = document.querySelector(".mobile-nav");
const mobileMenuCloseBtn = document.querySelector(".mobile-nav .close-btn");
const mobileMenuBtn = document.querySelector(".mobile-menu button");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("close");
});

mobileMenuBtn.addEventListener("click", () => {
  container.classList.toggle("slide-right");
  // if(backDrop.classList.contains("close")) {
  //   backDrop.classList.remove("close");
  // }else {
  //   backDrop.classList.add("close");
  // }
  backDrop.classList.toggle("close");
  mobileMenu.classList.toggle("active");
});

mobileMenuCloseBtn.addEventListener("click", () => {
  container.classList.toggle("slide-right");
  backDrop.classList.toggle("close");
  mobileMenu.classList.toggle("active");
});
