import { burgerMenuForMob } from "./modules/burgermenu";
import { scroll, autoScroll, posterDotz, posterItems } from "./modules/slider";
import { thisBookCategoty, bookCategory } from "./modules/bookcatnav";
import { checkCatForResp, sendRequest } from "./modules/fetch";
import { renderData, buyButtons, loadMoreButton } from "./modules/renderdata";
import {
  catchAtribute,
  putInCart,
  atribut,
  createCart,
  checkDataOnPage,
} from "./modules/cart";

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

async function showCards() {
  let booksArray = await sendRequest();
  await renderData(booksArray);
  await checkDataOnPage();
}
showCards();

loadMoreButton.addEventListener("click", () => {
  respStartIndex += 6;
  showCards();
});

//// Cart
// Начало работы с корзиной в ЛС.

createCart();

buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    catchAtribute(btn);
    putInCart(atribut);
    checkDataOnPage();
  });
});
