const menuButton = document.querySelector(".header__burger-logo");
const bugerMenuBody = document.querySelector(".header__burger-body");

export function burgerMenuForMob() {
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("used");
    bugerMenuBody.classList.toggle("shown");
  });
}
