const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productDetailCloseIcon2 = document.querySelector('.product-detail-close2');
const productDetailCloseIcon3 = document.querySelector('.product-detail-close3');
const productDetailCloseIcon4 = document.querySelector('.product-detail-close4');


const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailContainer2 = document.querySelector('#productDetail2');
const productDetailContainer3 = document.querySelector('#productDetail3');
const productDetailContainer4 = document.querySelector('#productDetail4');


const cardsContainer = document.querySelector('.cards-container');
const imgreseña = document.querySelector('.product-card');
const imgreseña2 = document.querySelector('.product-card2');
const imgreseña3 = document.querySelector('.product-card3');
const imgreseña4 = document.querySelector('.product-card4');


imgreseña.addEventListener('click',openProductDetailAside);
imgreseña2.addEventListener('click',openProductDetailAside2);
imgreseña3.addEventListener('click',openProductDetailAside3);
imgreseña4.addEventListener('click',openProductDetailAside4);



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
productDetailCloseIcon2.addEventListener('click', closeProductDetailAside2);
productDetailCloseIcon3.addEventListener('click', closeProductDetailAside3);
productDetailCloseIcon4.addEventListener('click', closeProductDetailAside4);


function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }
  

  closeProductDetailAside();
  closeProductDetailAside2();
  closeProductDetailAside3();
  closeProductDetailAside4();


  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  const isProductDetailClosed2 = productDetailContainer2.classList.contains('inactive');
  const isProductDetailClosed3 = productDetailContainer3.classList.contains('inactive');
  const isProductDetailClosed4 = productDetailContainer4.classList.contains('inactive');


  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  

  if (!isProductDetailClosed2) {
    productDetailContainer2.classList.add('inactive'); 
  }
  

  if (!isProductDetailClosed3) {
    productDetailContainer3.classList.add('inactive'); 
  }
  

  if (!isProductDetailClosed4) {
    productDetailContainer4.classList.add('inactive'); 
  }
  shoppingCartContainer.classList.toggle('inactive');


}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}
function openProductDetailAside2() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer2.classList.remove('inactive');
}
function openProductDetailAside3() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer3.classList.remove('inactive');
}
function openProductDetailAside4() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer4.classList.remove('inactive');
}


function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}
function closeProductDetailAside2() {
  productDetailContainer2.classList.add('inactive');
}
function closeProductDetailAside3() {
  productDetailContainer3.classList.add('inactive');
}
function closeProductDetailAside4() {
  productDetailContainer4.classList.add('inactive');
}


const productList = [];
productList.push({
  name: 'Bike',
  price: 300,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pelota',
  price: 200,
  image: 'https://soccerchief.com/wp-content/uploads/2020/08/photo-1567117632960-56e34a4c2456.jpg',
});
productList.push({
  name: 'Computadora',
  price: 25000,
  image: 'https://okdiario.com/img/2018/04/18/como-insertar-una-imagen-en-html.jpg',
  
});
productList.push({
  name: 'Silla gamer',
  price: 800,
  image: 'https://hebmx.vtexassets.com/arquivos/ids/765095-800-800?v=638218861029270000&width=800&height=800&aspect=true',
});
productList.push({
  name: 'Pantalla',
  price: 50000,
  image: 'https://blog.orange.es/wp-content/uploads/sites/4/2023/01/mac_desktop.png',
});
productList.push({
  name: 'Mochila',
  price: 500,
  image: 'https://m.media-amazon.com/images/I/41sFdZAHliL._SL500_.jpg',
});
productList.push({
  name: 'Celular',
  price: 10000,
  image: 'https://img.freepik.com/vector-premium/celular-moderno_490053-11.jpg',
});
productList.push({
  name: 'Tenis',
  price: 2500,
  image: 'https://media.blackandwhite-ff.com/10000/eb45f742-58ad-44bf-8012-4b0ac1ca00db_jordan-para-mujer.jpg',
});


renderProducts(productList);
