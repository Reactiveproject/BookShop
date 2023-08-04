//// Variables & Constantes
const posterItems = document.querySelectorAll(".poster-items__item");
const posterDotz = document.querySelectorAll(".sliderdotz__item");
const bookCategory = document.querySelectorAll(".book-list__list-item");

// let subjResp = document.querySelector();

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
    });
  };

  bookCategory.forEach(chooseBookCategory);
}

bookCategoryNav();

//// Response to GoogleBooks

let subjResp = document.querySelector(".book-list__list-item").innerText;

const APIKey = "AIzaSyCtJI5Ny3xpinAktf4VXAeiWG3j0-j1B1k";
const URL = `https://www.googleapis.com/books/v1/volumes?q="subject:${subjResp}"&key=${APIKey}&printType=books&startIndex=3&maxResults=6&langRestrict=en`;

console.log(subjResp);

let response = fetch(URL)
  .then((res) => res.json())
  .then((result) => {
    console.log(result);

    return result.items[0].volumeInfo.title;
  });
