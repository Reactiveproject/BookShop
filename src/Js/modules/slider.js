// слайдер прокрутки картинок
const posterItems = document.querySelectorAll(".poster-items__item");
const posterDotz = document.querySelectorAll(".sliderdotz__item");

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

export { scroll, autoScroll, posterDotz, posterItems };
