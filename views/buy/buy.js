const booktitle = document.querySelector('#title');
const bookprice = document.querySelector('#price');
const bookimage = document.querySelector('#last');
console.log(booktitle);
console.log(bookprice);
console.log(bookimage);

function buybooks(){
    let booklist = JSON.parse(localStorage.getItem('booksname')) ?? {};
    // bookimage.
};
buybooks();