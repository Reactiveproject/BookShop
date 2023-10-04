import { burgerMenuForMob } from "./modules/burgermenu";
import { scroll, autoScroll, posterDotz, posterItems } from "./modules/slider";
import { thisBookCategoty, bookCategory } from "./modules/bookcatnav";
import { checkCatForResp, sendRequest } from "./modules/fetch";
import { renderData } from "./modules/renderdata";

const bookCards = document.querySelectorAll(".cards-block__cards-item");

const loadMoreButton = document.querySelector(".books-block__button");

const buyButtons = document.querySelectorAll(".cards-item__button");
const buyButton = document.querySelector(".cards-item__button");
const cartCounter = document.querySelector(".cart-count");

////Burger menu

burgerMenuForMob();

////Start Slider

posterItems.forEach(scroll);
posterDotz.forEach(scroll);

autoScroll();

////Book sidebar category navigation

const chooseBookCategory = (item, index) => {
  let currentIndex;
  item.addEventListener("click", () => {
    currentIndex = index;
    thisBookCategoty(currentIndex);
    checkCatForResp();
    showCards();
  });
};

bookCategory.forEach(chooseBookCategory);

//// Fetch response to GoogleBooks

export let respStartIndex = 0;

checkCatForResp();

//Show info from response on cards

async function showCards() {
  let booksArray = await sendRequest();
  console.log(booksArray);
  await renderData(booksArray);
}

showCards();

function showMoreCards() {
  loadMoreButton.addEventListener("click", () => {
    respStartIndex += 6;
    showCards();
  });
}

showMoreCards();

//// Cart counter

// let shopCount = 0;

// cartCounter.innerHTML = shopCount;

// const checkCount = (count) => {
//   if (count) {
//     cartCounter.classList.add("cart-count__active");
//   } else {
//     cartCounter.classList.remove("cart-count__active");
//   }
// };

// checkCount(shopCount);

// const countPlus = () => (cartCounter.innerHTML = ++shopCount);
// const countMinus = () => (cartCounter.innerHTML = --shopCount);

// function addGoods() {
//   if (this.innerHTML == "buy now") {
//     this.classList.add("button__tabbed");
//     this.innerHTML = "in the cart";
//     countPlus();
//   } else {
//     this.classList.remove("button__tabbed");
//     this.innerHTML = "buy now";
//     countMinus();
//   }
//   checkCount(shopCount);
// }

// buyButtons.forEach((btn) => btn.addEventListener("click", addGoods));

// LOCALSTORAGE

//// класс для объекта "Корзина"

function addGoods() {
  if (this.innerHTML == "buy now") {
    this.classList.add("button__tabbed");
    this.innerHTML = "in the cart";
  } else {
    this.classList.remove("button__tabbed");
    this.innerHTML = "buy now";
  }
}

//   checkCount(shopCount);
// }

buyButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.closest(".cards-item__info"));
  })
);
