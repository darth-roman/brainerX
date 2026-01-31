// const body = document.querySelector("body")
// body.style.backgroundColor = "red"
// body.innerHTML = "<h1>Hello there</h1>"
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const genre = document.querySelector("[name='genre']")
const price = document.querySelector("[type='number']")

const submitBtn = document.querySelector("button")

const booksContainer = document.querySelector("#library")
// let book = {
//     title: title.value,
//     author: author.value,
//     genre: genre.value,
//     price: price.value
// }
// console.log(`Book before submit ${book.title}`);
    
console.log(booksContainer.innerHTML);


if(booksContainer){
    booksContainer.innerHTML = "<h3>Nothing is here</h3>"
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()


    let book = {
        title: title.value,
        author: author.value,
        genre: genre.value,
        price: price.value
    }

    if(booksContainer.textContent.includes("Nothing")){
        booksContainer.innerHTML = ""
    }

    booksContainer.innerHTML += `
    <div class="book ${book.genre}">
        <div class="book-header">
            <h4>${book.title}</h4>
            <p>${book.author}</p>
        </div>
        <div class="book-detail">
            <div class="genre"><span>${book.genre}</span></div>
            <div class="price"><span>${book.price} DZD</span></div>
        </div>
    </div>
    `


})


document.addEventListener("dblclick", (e)=> {
    const target = e.target
    if(target.classList.value.includes("book")){
        target.style.textDecoration = "line-through"
    }
})