const cartButton = document.querySelector('.cart-button');
const clearButton = document.querySelector('.clear-button');
const payButton = document.querySelector('.pay-button');
const cartItems = document.querySelector('.cart-items');
const totalPrice = document.querySelector('.total-price');
const itemContent = document.querySelector('.item-content');
const itemContainer = document.querySelector('item-container');

/* ---- ---- ---- Carrito de compras ---- ---- ---- */

let cart = [];

/* ---- ---- ---- Capturar producto ---- ---- ---- */

class Products {
  async getProducts() {
    try {
      let result = await fetch('product.json')
      let data = await result.json();
      let product = data.items; /* Capturar el vector de items */
      product = product.map(item => {
        const {title, price} = item.fields;
        const {id} = item.sys;
        const image = item.fields.image.fields.file.url;
        return {title, price, id, image} /* Retornar el objeto limpio */
      })
      return product
    } catch (error) {
      console.log(error);
    }
  }
}

class ShowProducts {

}

class LocalStorage {

}

document.addEventListener("DOMContentLoaded", () => {
  const showProduct = new ShowProducts();
  const products = new Products();

  /* ---- ---- ---- Capturar todos los productos ---- ---- ---- */

  products.getProducts().then(products => console.log(products));
})