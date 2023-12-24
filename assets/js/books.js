// let bookSeedData
// console.log(bookSeedData)

const API_KEY = 'AIzaSyBm8o9amGgOHyp27HXXiYqY4wD16VrGMxk'
const bookSection = $('#book-section')
const keyword = 'science+fiction'
let queryURL =
	'https://www.googleapis.com/books/v1/volumes?q=' +
	keyword +
	':keyes&key=' +
	API_KEY

// console.log(queryURL)

// Random category selection function
// function randomCategory
// Use the floor, RAM index to get random number
// loop the category array and choose the random number
// return that category

// Create a function to show the first loading page with category
// use the random category function
// use that category in the query
// return the sepected items of books

// Feelings convert to category function
// get the object of feeling-category
// return the selected category

// Category search for the query
// get the user input of feeling
// user the feeling conveter to category
// use the function with the category
// use the showBookContainer function

let bookWrapper = $('<div>')
bookWrapper.attr('class', 'row')
bookSection.append(bookWrapper)

function showBookContainer(id, imageURL, title, author, description) { //added id
	let bookContainer = $('<div>')
	bookContainer.attr('id', id) // created id attr
	bookContainer.attr('class', 'col-md-6 col-12 book-div') // added additional class book-div 
	let imageThumb = $('<img>')
	imageThumb.attr('src', imageURL)
	bookContainer.append(imageThumb)
	let bookTitle = $('<h5>')
	bookTitle.text(title)
	bookContainer.append(bookTitle)
	let authorName = $('<p>')
	authorName.text('by ' + author)
	bookContainer.append(authorName)
	let descriptionText = $('<p>')
	descriptionText.text(description)
	bookContainer.append(descriptionText)

	bookWrapper.append(bookContainer)
}

// fetch(queryURL)
// 	.then(function (reponse) {
// 		return reponse.json()
// 	})
// 	.then(function (data) {
// const bookItems = data.items
let bookItems = bookSeedData
console.log(bookItems)
for (let i = 0; i < bookItems.length; i++) {
	let id = bookItems[i].id // getting the id's of the various books
	let title = bookItems[i].volumeInfo.title
	let authorName = bookItems[i].volumeInfo.authors
	let image = bookItems[i].volumeInfo.imageLinks.smallThumbnail
	let year = bookItems[i].volumeInfo.imageLinks.smallThumbnail
	// console.log(image)
	let description = bookItems[i].searchInfo.textSnippet
	showBookContainer(id, image, title, authorName, description)
}
// })

