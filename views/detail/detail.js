const nameOfBook = document.querySelector('.title');
const imageOfBook = document.querySelector('.image');
const priceOfBook = document.querySelector('#price');
const descOfBook = document.querySelector('#description');

function displayDetialBook() {
    let book = JSON.parse(localStorage.getItem('booksname')) ?? {};
    for (let index of book){
        nameOfBook.textContent = index.name;
        priceOfBook.textContent = "$" + index.price;
        imageOfBook.src = index.img;
        descOfBook.textContent = index.description
        localStorage.getItem('bookaname');
    };
};

document.addEventListener('DOMContentLoaded', displayDetialBook);