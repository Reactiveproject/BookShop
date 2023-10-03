import { burgerMenuForMob } from "./modules/burgermenu";
import { scroll, autoScroll, posterDotz, posterItems } from "./modules/slider";
import { thisBookCategoty, bookCategory } from "./modules/bookcatnav";
import { checkCatForResp, sendRequest } from "./modules/fetch";

const bookCards = document.querySelectorAll(".cards-block__cards-item");

const itemImages = document.querySelectorAll(".cards-item__img");
const itemAuthor = document.querySelectorAll(".cards-item__author");
const itemTitles = document.querySelectorAll(".cards-item__title");
const itemStars = document.querySelectorAll(".cards-item__stars");
const itemStarsActive = document.querySelectorAll(".cards-item__stars_active");
const itemViews = document.querySelectorAll(".cards-item__views");
const itemDiscs = document.querySelectorAll(".cards-item__disc");
const itemPrices = document.querySelectorAll(".cards-item__price");

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

let currentIndex = 0;

const chooseBookCategory = (item, index) => {
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

// let loadedBookArray = [];

function showCards() {
  sendRequest().then((data) => {
    // loadedBookArray = data.slice(0);
    // console.log(data)
    for (let i = 0; i < data.length; i++) {
      itemTitles[i].innerHTML = data[i].volumeInfo.title;
      if (!data[i].volumeInfo.authors) {
        itemAuthor[i].innerHTML = "N/A";
      } else if (data[i].volumeInfo.authors.length > 1) {
        itemAuthor[i].innerHTML = data[i].volumeInfo.authors.toString();
      } else {
        itemAuthor[i].innerHTML = data[i].volumeInfo.authors[0];
      }
      if (!data[i].volumeInfo.imageLinks) {
        itemImages[
          i
        ].innerHTML = `<img src="/src/img/placeholder_pic.jpg" alt="pic of book" />`;
      } else {
        itemImages[
          i
        ].innerHTML = `<img src="${data[i].volumeInfo.imageLinks.thumbnail}" alt="pic of book" />`;
      }
      if (!data[i].volumeInfo.description) {
        itemDiscs[i].innerHTML = "N/A";
      } else {
        itemDiscs[i].innerHTML = data[i].volumeInfo.description;
      }
      if (data[i].saleInfo.retailPrice) {
        itemPrices[
          i
        ].innerHTML = `${data[i].saleInfo.retailPrice.currencyCode} ${data[i].saleInfo.retailPrice.amount}`;
      }

      if (data[i].volumeInfo.ratingsCount) {
        itemViews[i].innerHTML = `${data[i].volumeInfo.ratingsCount} review`;
      }
      if (data[i].volumeInfo.averageRating) {
        itemStarsActive[i].style.width = `${
          data[i].volumeInfo.averageRating / 0.05
        }%`;
      } else {
      }
    }
  });
}

const showMoreCards = () => {
  loadMoreButton.addEventListener("click", () => {
    respStartIndex += 6;
    showCards();
  });
};

showCards();

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
