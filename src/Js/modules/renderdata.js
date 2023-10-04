const itemCards = document.querySelectorAll(".cards-block__cards-item");
const itemImages = document.querySelectorAll(".cards-item__img");
const itemAuthor = document.querySelectorAll(".cards-item__author");
const itemTitles = document.querySelectorAll(".cards-item__title");
const itemStars = document.querySelectorAll(".cards-item__stars");
const itemStarsActive = document.querySelectorAll(".cards-item__stars_active");
const itemViews = document.querySelectorAll(".cards-item__views");
const itemDiscs = document.querySelectorAll(".cards-item__disc");
const itemPrices = document.querySelectorAll(".cards-item__price");

function renderData(data) {
  for (let i = 0; i < data.length; i++) {
    itemCards[i].setAttribute("bookid", data[i].id);
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
}

export { renderData };
