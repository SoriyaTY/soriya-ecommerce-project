// DOM element 
const btn = document.querySelector('#sav');
console.log(btn)
const btnEdit = document.querySelector('.hide');
const bookData = document.querySelector('#questions-container');
const booksname = document.querySelector('#products-name');
const booksprice = document.querySelector('#products-price');
const booksquality = document.querySelector ('#products-quality');
const booksphoto = document.querySelector('#products-photo');

// DATA 
let productList = JSON.parse(localStorage.getItem('booksname')) ?? [];

function hide(element) {
    element.style.display = "none";
}

function show(element){
    element.style.display = 'block';
}

// // function for addbook to localStorage
function addBookToLocal(key, value) {
    localStorage.setItem(key, value);
    console.log(key, value)
}

// function use for get book from local 
function getBookFromLocal(key) {
    return JSON.parse(localStorage.getItem(key));
}

// ------------------------------------------------------------------------
let addBooks = document.querySelector('#sav');
console.log(addBooks)
let form = document.querySelector('form');

function displayformadd(e){
    if (e.target.id === "add"){
        show(form)
        hide(bookData)
    }
}
let div;
function createcard(){
    for (let product in productList){

        div = document.createElement('div');
        div.className = 'main-card';
        div.dataset.index = product

        let title = document.createElement('h5');
        title.textContent = "Title Book: " + productList[product].name;
    
        let price = document.createElement('h5');
        price.textContent = "Price Book: " + "$" + productList[product].price;

        let action = document.createElement('div');
        action.className = "action";
        
        let edit = document.createElement('img');
        edit.src = "../../images/edit.svg";
        edit.id = 'edit';
        edit.addEventListener('click',(e)=>{
            let index = e.target.parentElement.parentElement.dataset.index;
            productList.splice(index, 1)
            addBookToLocal("booksname",JSON.stringify(productList));
            show(form);
            hide(bookData)
        })

        let trash = document.createElement('img');
        trash.src= "../../images/trash.png" ; 
        trash.id = "trash";
        trash.addEventListener('click', (e)=>{
            let index = e.target.parentElement.parentElement.dataset.index;
            productList.splice(index, 1)
            window.location.reload()
            addBookToLocal("booksname",JSON.stringify(productList));
            displayBooks();
        });

        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(action);
        action.appendChild(trash);
        action.appendChild(edit)
        bookData.appendChild(div);
    }
}

function displayBooks() {

    if(bookData.firstElementChild !== null ) {
        document.querySelector('#questions-container').remove();
    }
    const  newdiv = document.createElement('div');
    newdiv.appendChild(createcard());
    let products = getBookFromLocal('booksname');
    for (let product of products) {
        let row = createcard(product.name, product.price, product.img);
        newdiv.appendChild(row)
    }
    bookData.appendChild(newdiv);
}

function addbooks(e){
    e.preventDefault();
    if (booksname.value === '' || booksphoto.value === '') {
        return;
    }
    else if(isNaN(booksprice.value)){
        return;
    }
    let productObject = {name: booksname.value, price: booksprice.value, img: booksphoto.value}
    productList.push(productObject);
    booksname.value = "";
    booksprice.value = '';
    booksphoto.value = '';
    window.location.reload();
    addBookToLocal('booksname', JSON.stringify(productList));
    hide(form);
    show(bookData)
}
// event -----------------------------------------
btn.addEventListener('click', addbooks);
document.addEventListener('DOMContentLoaded', displayBooks)
document.addEventListener('click',displayformadd)
// btnEdit.addEventListener('click',editbooks)