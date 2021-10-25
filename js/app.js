const cartBtn = document.querySelector(".cart .cart__btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-nav .close-btn");
const mobileMenuBtn = document.querySelector(".mobile-menu button");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const mainImage = document.getElementById("main-image");
const products = document.querySelectorAll(
  ".products__showcase .product-toggle"
);
const thumbnails = document.querySelectorAll(".products__showcase .thumbnails");
const addToCart = document.getElementById("add-to-cart");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");

class UI {
  static container = document.querySelector(".container");
  static backDrop = document.querySelector(".backdrop");
  static mobileMenu = document.querySelector(".mobile-nav");

  static displayCart() {
    const cart = document.querySelector("header .cart-pop-up");
    cart.classList.toggle("height");
  }

  static displayMobileMenu = () => {
    this.container.classList.toggle("slide-right");
    this.backDrop.classList.toggle("close");
    this.mobileMenu.classList.toggle("active");
  };

  static closeMobileMenu = () => {
    this.container.classList.toggle("slide-right");
    this.backDrop.classList.toggle("close");
    this.mobileMenu.classList.toggle("active");
  };
}

cartBtn.addEventListener("click", UI.displayCart);

mobileMenuBtn.addEventListener("click", UI.displayMobileMenu);

mobileMenuCloseBtn.addEventListener("click", UI.closeMobileMenu);

// click on thumbnail to change main image on page
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    for (const product of products) {
      if (product.classList.contains(thumbnail.id)) {
        product.classList.remove("close");
      } else {
        product.classList.add("close");
      }
    }

    /*check & remove if any thumbnail contains a class of
    "overlay", then add an "overlay class to the current thumbnail
    being clicked on*/
    for (const eachThumbnail of thumbnails) {
      if (eachThumbnail.lastElementChild.classList.contains("overlay")) {
        eachThumbnail.lastElementChild.classList.remove("overlay");
      }
    }

    thumbnail.lastElementChild.classList.add("overlay");
  });
});

addToCart.addEventListener("click", () => {
  console.log("me");
});
