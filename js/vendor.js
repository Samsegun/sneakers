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
const modalYes = document.getElementById("yes");
const modalNo = document.getElementById("no");
