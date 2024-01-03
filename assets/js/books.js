// let bookSeedData
// console.log(bookSeedData)

const API_KEY = 'AIzaSyBm8o9amGgOHyp27HXXiYqY4wD16VrGMxk'
const bookSection = $('#book-section')
// const keyword = 'science+fiction'

const categoryItems = [
	'Comedy',
	'Feel-Good',
	'Inspirational',
	'Drama',
	'Tragic+Romance',
	'Thriller',
	'Horror',
	'Action',
	'Sports',
	'Social+Drama',
	'Romantic+Comedy',
	'Epic+Romance',
	'Heartfelt+Drama',
	'Mystery',
	'Plot-Twist',
	'Sci-Fi',
	'Documentary',
	'Satire',
	'Challenging',
]

let bookWrapper = $('<div>')
bookWrapper.attr('class', 'row')
bookSection.append(bookWrapper)

// Random category selection function
function randomCategory() {
	// Use the floor, RAM index to get random number
	const randomNumber = Math.floor(Math.random() * categoryItems.length) + 1
	// choose the random number
	let selectedCategoryItem = categoryItems[randomNumber]
	// return that category
	return selectedCategoryItem
}

// A function to show the first loading page with category
let randomCategoryName = randomCategory()
// console.log(randomCategoryName)

// Convert HTML texts to textarea
function decodeHtmlString(str) {
	let decodedP = $('<p>').html(str)
	return decodedP.text()
}

// how many books you get from books API
let maxResults = 20

// A function show book items from Books API
function showBooksItems(keyword) {
	// clear the result page
	bookWrapper.empty()
	// use the random category function
	// use that category in the query
	let queryURL =
		'https://www.googleapis.com/books/v1/volumes?q=famous+' +
		keyword +
		'&filter=ebooks&orderBy=relevance&maxResults=' +
		maxResults +
		'&printType=books&:keyes&key=' +
		API_KEY
	// console.log(queryURL)
	// return the expected items of books
	fetch(queryURL)
		.then(function (reponse) {
			return reponse.json()
		})
		.then(function (data) {
			if (data.items) {
				const bookItems = data.items
				// let bookItems = bookSeedData
				// console.log(bookItems)
				for (let i = 0; i < bookItems.length; i++) {
					let id = bookItems[i].id // getting the id's of the various books
					let title = bookItems[i].volumeInfo.title
					let authorName = bookItems[i].volumeInfo.authors
					let image =
						bookItems[i].volumeInfo.imageLinks?.thumbnail ||
						'./assets/images/noImage.png'
					let year = dayjs(bookItems[i].volumeInfo.publishedDate).format('YYYY')
					// console.log(image)
					let description =
						bookItems[i].searchInfo?.textSnippet || 'No content provided'
					let genre = bookItems[i].volumeInfo?.categories?.[0] || 'No category'
					showBookContainer(
						id,
						image,
						title,
						authorName,
						description,
						genre,
						year
					)
				}
			} else {
				console.log('no data')
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
		let categoryFeeling = feelingConverter(userMoodSelection)
		// console.log(categoryFeeling)
		showBooksItems(categoryFeeling)
	}
})

// user the feeling conveter to category
function feelingConverter(feeling) {
	if (categories.EmotionMovieAssociations.hasOwnProperty(feeling)) {
		const randomNumber = Math.floor(Math.random() * 2) + 1 // change 2 to dataset.length
		return categories.EmotionMovieAssociations[feeling][randomNumber]
	} else {
		return 'No category'
	}
}

// Function to create book contents.
function showBookContainer(
	id,
	imageURL,
	title,
	author,
	description,
	genre,
	year
) {
	//added id
	let bookContainer = $('<div>')
	bookContainer.attr('id', id) // created id attr
	bookContainer.attr('class', 'col-md-6 col-12 mb-2 book-div')

	let cardDiv = $('<div>')
	cardDiv.attr('class', 'card')
	bookContainer.append(cardDiv)

	let imageThumb = $('<img>')
	imageThumb.attr('class', 'card-img-top card-img-minHeight book-card-div')
	imageThumb.attr('src', imageURL)
	cardDiv.append(imageThumb)

	let cardBody = $('<div>')
	cardBody.attr('class', 'card-body card-body-minHeight')
	cardDiv.append(cardBody)

	let cardTitle = $('<div>')
	cardTitle.attr('class', 'card-title')
	cardBody.append(cardTitle)

	let bookTitle = $('<h5>')
	let titleShortend = shortenedOverview(title, 10)
	bookTitle.text(titleShortend)
	cardBody.append(bookTitle)

	let authorName = $('<p>')
	authorName.text('by ' + author)
	authorName.attr('class', 'card-text')
	cardBody.append(authorName)

	let genreText = $('<p>')
	genreText.text(genre)
	genreText.attr('class', 'card-text')
	cardBody.append(genreText)

	let yearText = $('<p>')
	yearText.text(year)
	yearText.attr('class', 'card-text')
	cardBody.append(yearText)

	let descriptionText = $('<p>')
	let descriptionDecoded = decodeHtmlString(description)
	descriptionDecoded = shortenedOverview(descriptionDecoded, 30)
	descriptionText.text(descriptionDecoded)
	descriptionText.attr('class', 'card-text')
	cardBody.append(descriptionText)

	bookWrapper.append(bookContainer)
}

showBooksItems(randomCategoryName)
