(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

/* ---- ---- ---- Iniciar el carrusel de imágenes ---- ---- ---- */

document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 400,
    dist: -80,
    shift: 5,
    padding: 5,
    numVisible: 3,
    indicators: true,
    noWrap: false
  })
});

/* ---- ---- ---- Declaración de variables ---- ---- ---- */

const cartButton = document.getElementsByClassName('cart-button');
const clearButton = document.getElementsByClassName('clear-button');
const removeButton = document.getElementsByClassName('remove-button');
const cartObject = document.getElementsByClassName('cart-objet');
const payButton = document.getElementsByClassName('pay-button');
const cartItems = document.getElementsByClassName('cart-items');
const totalPrice = document.getElementsByClassName('total-price');
const itemContent = document.getElementsByClassName('item-content');
const itemContainer = document.getElementsByClassName('item-container');

for(let i = 0; i < removeButton.length; i++) {
  let button = removeButton[i];
  button.addEventListener('click', function(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateTotalPrice();
  })
}

function updateTotalPrice() {
  let 
}