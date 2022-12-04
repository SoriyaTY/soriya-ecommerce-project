const nameOfBook = document.querySelector('.title');
const imageOfBook = document.querySelector('.image');
const priceOfBook = document.querySelector('#price');
const descOfBook = document.querySelector('#descript');
console.log(descOfBook)

function displayDetialBook() {
    let book = localStorage.getItem('index');
    let products = JSON.parse(localStorage.getItem('booksname'));
    nameOfBook.textContent = products[book].name;
    priceOfBook.textContent = "$" + products[book].price;
    descOfBook.textContent = products[book].descript;
    imageOfBook.src = products[book].img;
    localStorage.getItem('index');
};

document.addEventListener('DOMContentLoaded', displayDetialBook);