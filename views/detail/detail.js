const nameOfBook = document.querySelector('.title');
const imageOfBook = document.querySelector('.image');
const priceOfBook = document.querySelector('#price');

function displayDetialBook() {
    let book = JSON.parse(localStorage.getItem('booksname')) ?? {};
    for (let index of book){
        nameOfBook.textContent = index.name;
        priceOfBook.textContent = "$" + index.price;
        imageOfBook.src = index.img;
        localStorage.getItem('bookaname')
    };
};
document.addEventListener('DOMContentLoaded', displayDetialBook);