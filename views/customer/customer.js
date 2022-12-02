// function for create card 
// title is a parameter that get from local storage
// price is a parameter that get from local storage
// qty is a parameter that get from local storage
// imgs is a parameter that get from local storage
function createCard(title, price, imgs) {
    const image = document.createElement('a');
    image.href = "../detail/detail.html"
    const card = document.createElement('div');
    card.classList.add('card');

    const titleElement = document.createElement('div');
    titleElement.classList.add('title');
    titleElement.textContent = title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const priceElement = document.createElement('div');
    priceElement.classList.add('price');
    priceElement.textContent = "$" + price;

    const imgElement = document.createElement('img');
    imgElement.src = imgs;

    const star = document.createElement('img');
    star.src = "../../images/star.png";
    star.id = 'star';

    cardBody.appendChild(imgElement);
    cardBody.appendChild(titleElement);
    cardBody.appendChild(priceElement);
    cardBody.appendChild(star)
    card.appendChild(image);
    image.appendChild(cardBody)

    return card;
}

function displayBook() {
    let products = JSON.parse(localStorage.getItem('booksname'));
    for (let product of products) {
        let card = createCard(product.name, product.price, product.img);
        container.appendChild(card);
    }
}

function detailBook() {
    const books = document.querySelectorAll('.box');
    const productList = JSON.parse(localStorage.getItem('booksname'));
    for(let book of books) {
        book.addEventListener('click', (e) => {
            productList.name = book.firstElementChild.textContent;
            productList.img = book.lastElementChild.src;
            localStorage.setItem('booksname', JSON.stringify(productList));
            window.location.href = "../detail/detail.html";
        });
    }
}

const container = document.querySelector('#container');
document.addEventListener('DOMContentLoaded',  displayBook);
document.addEventListener('DOMContentLoaded',() => {
    detailBook()
    createCard()
})

function detailproducts() {
    const books = document.querySelectorAll('.main-title');
    const singleBook = JSON.parse(localStorage.getItem('booksname')) ?? {};
    for(let book of books) {
        book.addEventListener('click', (e) => {
            singleBook.title = book.textContent;
            singleBook.img = book.src;
            localStorage.setItem('booksname', JSON.stringify(singleBook));
            window.location.href = "../detail/detail.html";
        });
    }
}