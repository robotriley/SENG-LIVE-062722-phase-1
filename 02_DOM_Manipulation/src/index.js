//BookStore has been moved to data.js 

// Declare function
const renderHeader = () => document.querySelector('h1').textContent = bookStore.name

const renderFooter = () => {
    const footerDivs =  document.querySelectorAll('footer div')
   
    // Bookstore Name
    footerDivs[0].textContent = bookStore.name  
    // Bookstore Address
    footerDivs[1].textContent = bookStore.address
    // Bookstore Hours
    footerDivs[2].textContent = bookStore.hours 
}

// const createBook = () => {

// }

const renderBook = book => {
    // Generate HTML elements
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const pAuthor = document.createElement('p')
    const pPrice = document.createElement('p')
    const img = document.createElement('img')
    const btn = document.createElement('button')
    // Fill those HTML elements with content
    h3.textContent = book.title
    pAuthor.textContent = book.author
    pPrice.textContent = book.price
    btn.textContent = 'Delete Book'
    img.src = book.imageUrl
    li.className = 'list-li'
// Generate full <li> for each book
    li.append(h3, pAuthor, pPrice, img, btn)
    document.querySelector('#book-list').append(li)


};
// Invoke
renderHeader()

renderFooter()

const books = bookStore.inventory
books.forEach(renderBook);