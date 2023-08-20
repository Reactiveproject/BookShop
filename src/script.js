//// Variables & Constantes
const APIKey = "AIzaSyCtJI5Ny3xpinAktf4VXAeiWG3j0-j1B1k";

const posterItems = document.querySelectorAll(".poster-items__item");
const posterDotz = document.querySelectorAll(".sliderdotz__item");
const bookCategory = document.querySelectorAll(".book-list__list-item");

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

////Start Slider

function initSlider() {
  let currentIndex = 0;

  const thisPoster = (index) => {
    posterDotz.forEach((item) =>
      item.classList.remove("sliderdotz__item_active")
    );
    posterDotz[index].classList.add("sliderdotz__item_active");

    posterItems.forEach((item) =>
      item.classList.remove("poster-items__item_active")
    );
    posterItems[index].classList.add("poster-items__item_active");
  };

  const scroll = (item, index) => {
    item.addEventListener("click", () => {
      currentIndex = index;
      thisPoster(currentIndex);
    });
  };

  const autoScroll = () => {
    let index = 0;
    setInterval(() => {
      thisPoster(index);
      if (index == posterItems.length - 1) {
        index = 0;
      } else {
        index++;
      }
    }, 5000);
  };

  posterItems.forEach(scroll);
  posterDotz.forEach(scroll);
  autoScroll();
}

addEventListener("DOMContentLoaded", initSlider);

function bookCategoryNav() {
  let currentIndex = 0;

  const thisBookCategoty = (index) => {
    bookCategory.forEach((item) =>
      item.classList.remove("book-list__list-item_active")
    );
    bookCategory[index].classList.add("book-list__list-item_active");
  };

  const chooseBookCategory = (item, index) => {
    item.addEventListener("click", () => {
      currentIndex = index;
      thisBookCategoty(currentIndex);
      checkCatForResp();
      showCards();
    });
  };
  bookCategory.forEach(chooseBookCategory);
}

bookCategoryNav();

//// Response to GoogleBooks

let subjResp;

const checkCatForResp = () => {
  bookCategory.forEach((item) => {
    if (item.classList.contains("book-list__list-item_active")) {
      subjResp = item.innerText;
    }
  });
};

checkCatForResp();

//FETCH response
let respStartIndex = 0;

async function sendRequest() {
  let URL = `https://www.googleapis.com/books/v1/volumes?q="subject:${subjResp}"&key=${APIKey}&printType=books&startIndex=${respStartIndex}&maxResults=6&langRestrict=en`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.items;
}

//Show info from response on cards
function showCards() {
  sendRequest().then((data) => {
    console.log(data);
    for (i = 0; i < data.length; i++) {
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
        ].innerHTML = `<img src="/img/placeholder_pic.jpg" alt="pic of book" />`;
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

showCards();

const showMoreCards = () => {
  loadMoreButton.addEventListener("click", () => {
    respStartIndex += 6;
    showCards();
  });
};

showMoreCards();

// };
// console.log(result.items[0].volumeInfo.title); //Title
// console.log(result.items[0].volumeInfo.authors[0]); //AUthor
// itemImages[0] = result.items[0].volumeInfo.imageLinks.thumbnail; //image
// console.log(result.items[0].searchInfo.textSnippet); // Discritipon
// console.log(result.items[0].searchInfo.textSnippet); //Price

//// Cart counter

let shopCount = 0;

cartCounter.innerHTML = shopCount;

const checkCount = (count) => {
  if (count) {
    cartCounter.classList.add("cart-count__active");
  } else {
    cartCounter.classList.remove("cart-count__active");
  }
};

checkCount(shopCount);

const countPlus = () => (cartCounter.innerHTML = ++shopCount);
const countMinus = () => (cartCounter.innerHTML = --shopCount);

function addGoods() {
  if (this.innerHTML == "buy now") {
    this.classList.add("button__tabbed");
    this.innerHTML = "remove";
    countPlus();
  } else {
    this.classList.remove("button__tabbed");
    this.innerHTML = "buy now";
    countMinus();
  }
  checkCount(shopCount);
}

buyButtons.forEach((btn) => btn.addEventListener("click", addGoods));

// LOCALSTORAGE

// const
