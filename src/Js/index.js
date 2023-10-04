import { burgerMenuForMob } from "./modules/burgermenu";
import { scroll, autoScroll, posterDotz, posterItems } from "./modules/slider";
import { thisBookCategoty, bookCategory } from "./modules/bookcatnav";
import { checkCatForResp, sendRequest } from "./modules/fetch";
import { renderData } from "./modules/renderdata";

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

//// Cart

buyButtons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const targetCard = event.target.closest(".cards-block__cards-item");
    bookId = targetCard.getAttribute("bookid");
  })
);
