const libraryContainer = document.querySelector("#library")

const title = document.querySelector("#title")
const author = document.querySelector("#author")
const genre = document.querySelector("#genre")
const price = document.querySelector("#price")

const submitBtn = document.querySelector("[type='submit']")


submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const book = {
        title: title.value,
        author: author.value,
        genre: genre.value,
        price: price.value
    }

    addABook(book)
})

window.addEventListener("DOMContentLoaded", ()=>{
    if(libraryContainer){
        libraryContainer.innerHTML = `<h3>Nothing Here</h3>`
    }
})


function addABook(book){
     if(libraryContainer.innerHTML.includes("Nothing")){
        libraryContainer.innerHTML = ""
    }

    libraryContainer.innerHTML += `
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
}

// document.addEvetListener("dblclick", (e) => {
//     const target = e.target
//     console.log(target.classList.value.includes("book"));
    
//     // if(target.classList.includes("book")) target.style.background = "red"
// })


// function grayScaleBook(){

// }
