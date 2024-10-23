const search = document.querySelector('.search');
const inputbtn = document.querySelector('.input');
const dots = document.querySelector('.dots');
const shopcart = document.querySelector('.shoping-cart');
const searchbtn = document.querySelector('.search-btn');
const arrowbtn = document.querySelector('.arrow-btn');

searchbtn.addEventListener('click', () => {
    searchbtn.style.display = 'none';
    arrowbtn.style.display = 'inline-block';
    inputbtn.style.width = '100%';
    dots.style.display = 'none';
    shopcart.style.display = 'none';

});
arrowbtn.addEventListener('click', () => {
    searchbtn.style.display = 'inline-block';
    arrowbtn.style.display = 'none';
    inputbtn.style.width = '60%';
    dots.style.display = 'flex';
    shopcart.style.display = 'flex';
});
search.addEventListener('click', () => {
    searchbtn.style.display = 'none';
    arrowbtn.style.display = 'inline-block';
    inputbtn.style.width = '100%';
    dots.style.display = 'none';
    shopcart.style.display = 'none';
});