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
const qtyBtn = document.getElementById("quantity");
const cartNotifier = document.getElementById("active-products");
const cartItems = document.querySelector(".cart-pop-up ul");
const emptyCart = document.querySelector(".cart-pop-up ul .empty-cart");
const liveCart = document.querySelector(".cart-pop-up ul .live-cart");
const cartPrice = document.querySelector(".cart-pop-up ul .price span");
const cartQty = document.querySelector(".cart-pop-up ul .quantity");
const cartTotal = document.querySelector(".cart-pop-up ul .total span");
const cartDeleteBtn = document.querySelector(".cart-pop-up ul .delete-btn");
const cartCheckOut = document.querySelector(".cart-pop-up #check-out");
const price = document.querySelector(".products .products__info-price h3 span");

let count = 0;

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
  count++;
  addToCart.disabled = true;
  qtyBtn.textContent = count;

  cartNotifier.classList.remove("close");
  cartNotifier.textContent = count;

  emptyCart.classList.add("close");
  liveCart.classList.remove("close");
  cartCheckOut.classList.remove("close");

  cartPrice.textContent = price.textContent;
  cartQty.textContent = count;
  cartTotal.textContent = parseFloat(price.textContent) * count;

  decreaseBtn.disabled = false;
  increaseBtn.disabled = false;
});

decreaseBtn.addEventListener("click", () => {
  if (count === 1) {
    count--;

    qtyBtn.textContent = count;
    emptyCart.classList.remove("close");
    liveCart.classList.add("close");
    cartCheckOut.classList.add("close");
    cartNotifier.classList.add("close");

    decreaseBtn.disabled = true;
    addToCart.disabled = false;
  } else {
    count--;
    qtyBtn.textContent = count;
    cartNotifier.textContent = count;
    cartQty.textContent = count;
    cartTotal.textContent = parseFloat(price.textContent) * count;
  }
});

increaseBtn.addEventListener("click", () => {
  if (count === 0) {
    increaseBtn.disabled = true;
  } else {
    increaseBtn.disabled = false;
    count++;
    qtyBtn.textContent = count;
    cartNotifier.textContent = count;
    cartQty.textContent = count;
    cartTotal.textContent = parseFloat(price.textContent) * count;
  }
});

cartDeleteBtn.addEventListener("click", () => {
  count = 0;

  cartPrice.textContent = count;
  cartQty.textContent = count;
  cartTotal.textContent = count;
  qtyBtn.textContent = count;
  cartNotifier.classList.add("close");

  addToCart.disabled = false;
  decreaseBtn.disabled = true;
  increaseBtn.disabled = true;

  cartCheckOut.classList.add("close");

  liveCart.classList.add("close");
  emptyCart.classList.remove("close");
});
