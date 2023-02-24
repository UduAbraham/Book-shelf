let btn = document.querySelector('#page-banner');

console.log('the parentnode is:', btn.parentNode);
console.log('parent Element is:', btn.parentElement.parentElement);

console.log(btn.children);

// let booklist = document.querySelector('#Book-list .delete');

// console.log(' book-list previous element sibling is:', booklist.previousElementSibling);
// console.log(' book-list next element sibling is:', booklist.nextElementSibling);

// booklist.previousElementSibling.querySelector('p').innerHTML += '<br/> good for u'

let h2 = document.querySelector('form button')

h2.addEventListener('click', function(t){
console.log(t.target);
console.log(t)
});

// Adding evenlistener

let booklist = document.querySelector('#Book-list ul')

booklist.addEventListener("click", function(e){
    if(e.target.className == 'delete') {
    const li = e.target.parentElement;
    booklist.removeChild(li);

    }
});

// using javascript in form

    const addForm = document.forms['Add-book'];

addForm.addEventListener('submit',function(a) {
    a.preventDefault();
    const  value = addForm.querySelector('input[type="text"]').value;

    // create element 

    const li = document.createElement('li');
    const bookname = document.createElement('p');
    const deletebtn = document.createElement('p');

    // add text content

    bookname.textContent = value;
    deletebtn.textContent = "Delete";

    // classlist
    bookname.classList = "name";
    deletebtn.classList = "delete";

    // to append element

    li.appendChild(bookname);
    li.appendChild(deletebtn);
    booklist.appendChild(li);

});

const checkbox = document.querySelector('#box')

checkbox.addEventListener('change', function(e){
    if(checkbox.checked){
        booklist.style.display= "none";
    }
    else{
        booklist.style.display = 'initial';
    }
});
    
const searchbar = document.forms['search'].querySelector('input');
searchbar.addEventListener('keyup',function(a){
    const book = a.target.value.toLowerCase();
    const term = booklist.getElementsByTagName('li');
    Array.from(term).forEach(function(bet){
        const title = bet.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(book)!=-1){
            bet.style.display = 'block';
        }else{
            bet.style.display = 'none';
        }
    })


})