const bookCategory = document.querySelectorAll(".book-list__list-item");

const thisBookCategoty = (index) => {
  bookCategory.forEach((item) =>
    item.classList.remove("book-list__list-item_active")
  );
  bookCategory[index].classList.add("book-list__list-item_active");
};

export { thisBookCategoty, bookCategory };
