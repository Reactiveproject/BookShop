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
const itemViews = document.querySelectorAll(".cards-item__views");
const itemDiscs = document.querySelectorAll(".cards-item__disc");
const itemPrices = document.querySelectorAll(".cards-item__price");

const loadMoreButton = document.querySelector("books-block__button");

const booksArray = [];

const bookCardItem = {
  image: "",
  author: "",
  title: "1",
  stars: "",
  views: "",
  disc: "",
  price: "",
};

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

  const Scroll = (item, index) => {
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
    }, 3000);
  };

  posterItems.forEach(Scroll);
  posterDotz.forEach(Scroll);
  autoScroll();
}

addEventListener("DOMContentLoaded", initSlider);

//// End Slider

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
      console.log(subjResp);
    }
  });
};

checkCatForResp();

// console.log(subjResp);

//FETCH response

// let respBookArray = [];

const showCards = () => {
  let titles = [];

  function response() {
    let URL = `https://www.googleapis.com/books/v1/volumes?q="subject:${subjResp}"&key=${APIKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`;
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        return result.items;
      })
      .then((data) => {
        for (i = 0; i < data.length + 1; i++) {
          itemTitles[i].innerText = data[i].volumeInfo.title;
          itemAuthor[i].innerHTML = data[i].volumeInfo.authors[0];
          itemImages[
            i
          ].innerHTML = `<img src="${data[i].volumeInfo.imageLinks.thumbnail}" alt="" />`;
          itemDiscs[i].innerText = data[i].searchInfo.textSnippet;
        }
      });
  }
  response();
};

showCards();

// };
// console.log(result.items[0].volumeInfo.title); //Title
// console.log(result.items[0].volumeInfo.authors[0]); //AUthor
// itemImages[0] = result.items[0].volumeInfo.imageLinks.thumbnail; //image
// console.log(result.items[0].searchInfo.textSnippet); // Discritipon
// console.log(result.items[0].searchInfo.textSnippet); //Price

////

// //// Show Info form googlebook response

// const showCards = () => {
//   itemImages.forEach((item, index) => {
//     item.innerHTML = `<img src=${itemImg} alt="" />`;
//   });
// };
