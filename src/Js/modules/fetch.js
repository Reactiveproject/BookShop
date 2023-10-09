///// fetch запрос на сервер
const APIKey = "AIzaSyCtJI5Ny3xpinAktf4VXAeiWG3j0-j1B1k";

import { bookCategory } from "./bookcatnav";
import { respStartIndex } from "..";

let subjResp;

let countOfResult;

const checkCatForResp = () => {
  bookCategory.forEach((item) => {
    if (item.classList.contains("book-list__list-item_active")) {
      subjResp = item.innerText;
    }
  });
};

async function sendRequest() {
  let URL = `https://www.googleapis.com/books/v1/volumes?q="subject:${subjResp}"&key=${APIKey}&printType=books&startIndex=${respStartIndex}&maxResults=6&langRestrict=en`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data.items);
  return data.items;
}

export { checkCatForResp, sendRequest };
