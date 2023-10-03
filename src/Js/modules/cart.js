//// класс для объекта "Коразина"
class Cart {
  products;
  constructor() {
    this.products = [];
  }
  get count() {
    return this.products.length;
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(index) {
    this.products.splice(index, 1);
  }
}

const myCart = new Cart(); ////Создаем массив корзины

//Проверяем наличие данных в крзине
if (localStorage.getItem("cart") == null) {
  localStorage.setItem("cart", JSON.stringify(myCart)); //если пусто - отправляем наш объект
}

const savedCart = JSON.parse(localStorage.getItem("cart")); //вытыскиваем объект из корзины
myCart.products = savedCart.products; // записываем объект в нашу переменную

cartCounter.textContent = myCart.count; // показываем количество объектов в массиве корзины на странице

//функция проверки корзины для кнопок в блоке книг
function checkBookInCart(data) {
  if (myCart.includes(data[i].id)) {
    this.classList.add("button__tabbed");
    this.innerHTML = "in the cart";
  } else {
    this.classList.remove("button__tabbed");
    this.innerHTML = "buy now";
  }
}
