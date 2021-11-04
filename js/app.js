let count = 0;
let productImg = 0;

class UI {
  static container = document.querySelector(".container");
  static backDrop = document.querySelector(".backdrop");
  static mobileMenu = document.querySelector(".mobile-nav");
  static modal = document.querySelector(".modal");

  static displayCart() {
    const cart = document.querySelector("header .cart-pop-up");
    cart.classList.toggle("height");
  }

  static displayMobileMenu = () => {
    this.backDrop.classList.toggle("close");
    this.mobileMenu.classList.toggle("active");
  };

  static closeMobileMenu = () => {
    this.backDrop.classList.toggle("close");
    this.mobileMenu.classList.toggle("active");
  };

  static displayModal = () => {
    this.backDrop.classList.toggle("close");
    this.modal.classList.toggle("show");
  };

  static deleteCartItem = () => {
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

    this.displayModal();
  };

  static dontDeleteCartItem = () => {
    this.displayModal();
  };

  static removeImagesMobileMode() {
    for (const eachProduct of products) {
      eachProduct.classList.add("close");
    }
  }
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

cartDeleteBtn.addEventListener("click", UI.displayModal);

modalYes.addEventListener("click", UI.deleteCartItem);
modalNo.addEventListener("click", UI.dontDeleteCartItem);

// scroll pictures in mobile view
previousBtn.addEventListener("click", () => {
  UI.removeImagesMobileMode();

  productImg--;
  if (productImg < 0) {
    productImg = products.length - 1;
  }
  products[productImg].classList.remove("close");
});

nextBtn.addEventListener("click", () => {
  UI.removeImagesMobileMode();

  productImg++;
  if (productImg > products.length - 1) {
    productImg = 0;
  }

  products[productImg].classList.remove("close");
});
