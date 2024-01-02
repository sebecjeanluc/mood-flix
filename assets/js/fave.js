// selecting elements for book, movie and fave sections
let bookSectionEl = $('#book-section')
let movieSectionEl = $('#movie-section')
let faveSectionEl = $('#faved-section');

// Retrieving favourite items from local storage
const faveItemsFromStorage = JSON.parse(localStorage.getItem('favourite'))

// Populating the favourite section with stored items if available
if(faveItemsFromStorage) {
faveSectionEl.html(faveItemsFromStorage)
}

// Function to create favourite book card
function createFavouriteBookDiv(
  cardImageSrc,  
  cardTitle, 
  cardAuthor,
  cardDescription
  ) {

// creating elements for the favourite book card
  let favedCardDiv = $('<div>')
  favedCardDiv.addClass('card fave-card')
  favedCardDiv.css("width", "18rem")
  favedCardDiv.css("marginBottom", "10px")

  let favedCardDivImg = $("<img>")
  favedCardDivImg.attr("src", cardImageSrc)
  favedCardDivImg.addClass("card-img-top")
  favedCardDivImg.attr("alt", cardTitle)

  let favedCardDivUl = $('<ul>')
  favedCardDivUl.addClass("list-group list-group-flush text-start")

  let favedCardDivLiTitle = $('<li>')
  favedCardDivLiTitle.addClass("list-group-item")
  favedCardDivLiTitle.text('Title: ' + cardTitle)


  let favedCardDivLiAuthor = $('<li>')
  favedCardDivLiAuthor.addClass("list-group-item")
  favedCardDivLiAuthor.text('Author: ' + cardAuthor) 

 
  let favedCardDivLiDescription = $('<li>')
  favedCardDivLiDescription.addClass("list-group-item")
  favedCardDivLiDescription.text('Description: ' + cardDescription)

  const deleteButton = $('<button>')
  deleteButton.addClass('clear')
  deleteButton.text('clear')

  deleteButton.on("click", (event) =>{
    const faveItemsFromStorage = JSON.parse(localStorage.getItem('favourite'))
    console.log(faveItemsFromStorage)
    
  })

  // Appends elements to construct the favourite book card
  favedCardDivUl.append(favedCardDivLiTitle, favedCardDivLiAuthor, favedCardDivLiDescription)
  favedCardDiv.append(favedCardDivImg, favedCardDivUl, deleteButton)

  // Appending the fave card div to the fave section
  let faveCardSection = $("#faved-section")
  faveCardSection.append(favedCardDiv)

  // Updating local storage with the current state of the fave section
  let faveItems = [] 
  faveItems.push(faveSectionEl.html())
  localStorage.setItem('favourite', JSON.stringify(faveItems))
}

// Function to create fave movie card
function createFavouriteMovieDiv(
  cardImageSrc,  
  cardTitle, 
  cardYear,
  cardDescription
  ) {

    // creating elements for fave movie card
  let favedCardDiv = $('<div>')
  favedCardDiv.addClass('card fave-card')
  favedCardDiv.css("width", "18rem")
  favedCardDiv.css("marginBottom", "10px")

  let favedCardDivImg = $("<img>")
  favedCardDivImg.attr("src", cardImageSrc)
  favedCardDivImg.addClass("card-img-top")
  favedCardDivImg.attr("alt", cardTitle)

  let favedCardDivUl = $('<ul>')
  favedCardDivUl.addClass("list-group list-group-flush text-start")

  let favedCardDivLiTitle = $('<li>')
  favedCardDivLiTitle.addClass("list-group-item")
  favedCardDivLiTitle.text('Title: ' + cardTitle)


  let favedCardDivLiYear = $('<li>')
  favedCardDivLiYear.addClass("list-group-item")
  favedCardDivLiYear.text('Year: ' + cardYear) 

 
  let favedCardDivLiDescription = $('<li>')
  favedCardDivLiDescription.addClass("list-group-item")
  favedCardDivLiDescription.text('Description: ' + cardDescription)

  const deleteButton = $('<button>')
  deleteButton.addClass('clear')
  deleteButton.text('Click to clear')

  // Appending elements to construct fave movie card
  favedCardDivUl.append(favedCardDivLiTitle, favedCardDivLiYear, favedCardDivLiDescription)
  favedCardDiv.append(favedCardDivImg, favedCardDivUl, deleteButton)

  // Appends the fave movie card to the fave section
  let faveCardSection = $("#faved-section")
  faveCardSection.append(favedCardDiv)

  // updates local storage 
  let faveItems = faveSectionEl.html() // after
  localStorage.setItem('favourite', JSON.stringify(faveItems)) // after
}

// Event listener for clicking on a book
bookSectionEl.on('click', function(event) {
//console.log("outside") 

// Condition for an event when a click is performed on a book image
if(event.target.classList.contains("book-card-div")){
  // console.log("inside") 
 const book = event.target.parentElement
 const bookImage = book.querySelector('img').src
//  console.log(bookImage)

 const bookTitle = book.querySelector('h5').textContent
//  console.log(bookTitle)
 
const bookAuthor = book.querySelectorAll('p')[0].textContent
// console.log(book.querySelectorAll('p')[0].textContent)

const bookDescription = book.querySelectorAll('p')[1].textContent
// console.log(book.querySelectorAll('p')[1].textContent)

// creates fave book card
createFavouriteBookDiv(bookImage, bookTitle, bookAuthor, bookDescription)
}
})

// Event listener for clicking on a movie
movieSectionEl.on('click', function(event) {
  
  if(event.target.parentElement.classList.contains('card')){
    // Extracts info from the clicked movie card
    const movie = event.target.parentElement
    const movieImage = movie.querySelector('img').src
    const movieTitle = movie.querySelector('h5').textContent
    const movieDescription = movie.querySelectorAll('p')[0].textContent
    const movieYear = movie.querySelectorAll('p')[1].textContent
  
    // calling the fave movie card
    createFavouriteMovieDiv(movieImage, movieTitle, movieYear, movieDescription)
  }
})


