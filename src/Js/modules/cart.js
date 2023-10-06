import { buyButtons } from "./renderdata";
const cartCounter = document.querySelector(".cart-count");

//// класс для объекта "Коразина"
class Cart {
  products;
  constructor() {
    this.products = [];
  }
  get count() {
    return this.products.length;
  }
}

let atribut;

const myCart = new Cart(); ////Создаем массив корзины

function createCart() {
  if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify(myCart));
  }
}

//
function cartDataCheck() {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  myCart.products = savedCart.products;
  cartCounter.textContent = myCart.count;
}

function cartCounterCheck() {
  if (cartCounter.textContent == 0) {
    cartCounter.classList.remove("cart-count__active");
  } else {
    cartCounter.classList.add("cart-count__active");
  }
}

const catchAtribute = (item) => {
  let parentNode = item.closest(".cards-block__cards-item");
  atribut = parentNode.getAttribute("bookid");
  return atribut;
};

const switchOn = (item) => {
  item.classList.add("button__tabbed");
  item.textContent = "in the cart";
};

const switchOff = (item) => {
  item.classList.remove("button__tabbed");
  item.textContent = "buy now";
};

function buttonCheck() {
  buyButtons.forEach((btn) => {
    catchAtribute(btn);
    if (myCart.products.includes(atribut)) {
      switchOn(btn);
    } else {
      switchOff(btn);
    }
  });
}

function putInCart(item) {
  const index = myCart.products.indexOf(item);
  if (!myCart.products.includes(item)) {
    myCart.products.push(item);
  } else {
    myCart.products.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(myCart));
}

function checkDataOnPage() {
  cartDataCheck();
  cartCounterCheck();
  buttonCheck();
}

export { catchAtribute, putInCart, atribut, createCart, checkDataOnPage };
