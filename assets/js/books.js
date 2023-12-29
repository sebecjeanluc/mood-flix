// let bookSeedData
// console.log(bookSeedData)

const API_KEY = 'AIzaSyBm8o9amGgOHyp27HXXiYqY4wD16VrGMxk'
const bookSection = $('#book-section')
// const keyword = 'science+fiction'

const categoryItems = [
	'happy',
	'sad',
	'gloomy',
	'angry',
	'excited',
	'romantic',
	'weird',
]

let bookWrapper = $('<div>')
bookWrapper.attr('class', 'row')
bookSection.append(bookWrapper)

// Random category selection function
// function randomCategory
function randomCategory() {
	// Use the floor, RAM index to get random number
	const randomNumber = Math.floor(Math.random() * 6) + 1
	// console.log(randomNumber)
	// choose the random number
	let selectedCategoryItem = categoryItems[randomNumber]
	// return that category
	return selectedCategoryItem
}

// console.log(randomCategory())
// Create a function to show the first loading page with category
let randomCategoryName = randomCategory()
console.log(randomCategoryName)

function showBooksItems(keyword) {
	bookWrapper.empty()
	// use the random category function
	// use that category in the query
	let queryURL =
		'https://www.googleapis.com/books/v1/volumes?q=' +
		keyword +
		':keyes&key=' +
		API_KEY
	console.log(queryURL)
	// return the expected items of books
	fetch(queryURL)
		.then(function (reponse) {
			return reponse.json()
		})
		.then(function (data) {
			const bookItems = data.items
			// let bookItems = bookSeedData
			console.log(bookItems)
			for (let i = 0; i < bookItems.length; i++) {
				let id = bookItems[i].id // getting the id's of the various books
				let title = bookItems[i].volumeInfo.title
				let authorName = bookItems[i].volumeInfo.authors
				let image =
					bookItems[i].volumeInfo.imageLinks?.thumbnail ||
					'./assets/images/noImage.png'
				// let year = bookItems[i].volumeInfo.imageLinks.smallThumbnail
				// console.log(image)
				let description =
					bookItems[i].searchInfo?.textSnippet || 'No content provided'
				showBookContainer(id, image, title, authorName, description)
			}
		})
}

// Category search for the query
// get the user input of feeling
moodButtons.on('click', function (event) {
	if (event.target.tagName === 'BUTTON') {
		// to get the text info of the clicked button
		let userMoodSelection = event.target.textContent
		// console.log(userMoodSelection)
		showBooksItems(userMoodSelection)
	}
})

// user the feeling conveter to category
// use the function with the category
// use the showBookContainer function

function showBookContainer(id, imageURL, title, author, description) {
	//added id
	let bookContainer = $('<div>')
	bookContainer.attr('id', id) // created id attr
	bookContainer.attr('class', 'col-md-6 col-12 mb-2 book-div')

	let cardDiv = $('<div>')
	cardDiv.attr('class', 'card')
	bookContainer.append(cardDiv)

	let imageThumb = $('<img>')
	imageThumb.attr('class', 'card-img-top')
	imageThumb.attr('src', imageURL)
	cardDiv.append(imageThumb)

	let cardBody = $('<div>')
	cardBody.attr('class', 'card-body')
	cardDiv.append(cardBody)

	let cardTitle = $('<div>')
	cardTitle.attr('class', 'card-title')
	cardBody.append(cardTitle)
	let bookTitle = $('<h5>')
	bookTitle.text(title)
	cardBody.append(bookTitle)
	let authorName = $('<p>')
	authorName.text('by ' + author)
	authorName.attr('class', 'card-text')
	cardBody.append(authorName)
	let descriptionText = $('<p>')
	descriptionText.text(description)
	descriptionText.attr('class', 'card-text')
	cardBody.append(descriptionText)

	bookWrapper.append(bookContainer)
}

showBooksItems(randomCategoryName)
