//BookStore has been moved to data.js 

// Declare function
function renderHeader () {
    document.querySelector('h1').textContent = bookStore.name
}

function renderFooter () {
    const footerDivs =  document.querySelectorAll('footer div')
   
    // Bookstore Name
    footerDivs[0].textContent = bookStore.name  
    // Bookstore Address
    footerDivs[1].textContent = bookStore.address
    // Bookstore Hours
    footerDivs[2].textContent = bookStore.hours 
}

// Invoke
renderHeader()

renderFooter()