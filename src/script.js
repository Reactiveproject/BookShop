const posterItems = document.querySelectorAll(".poster-items__item");
const posterDotz = document.querySelectorAll(".sliderdotz__item");

/////////SLIDER

let currentImg = 0;

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

const dotzScroll = (dot, index) => {
  dot.addEventListener("click", () => {
    currentImg = index;
    thisPoster(currentImg);
  });
};

const autoScroll = (arrCollection) => {
  element = 0;
  for (let element of arrCollection) {
    thisPoster(element);
  }
};

posterItems.forEach(dotzScroll);
posterDotz.forEach(dotzScroll);
