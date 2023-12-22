const API_KEY = 'AIzaSyBm8o9amGgOHyp27HXXiYqY4wD16VrGMxk'
const bookSection = $('#book-section')
const keyword = 'science+fiction'
let queryURL =
	'https://www.googleapis.com/books/v1/volumes?q=' +
	keyword +
	':keyes&key=' +
	API_KEY

// console.log(queryURL)

let bookWrapper = $('<div>')
bookWrapper.attr('class', 'row')
bookSection.append(bookWrapper)

function showBookContainer(imageURL, title, author, description) {
	let bookContainer = $('<div>')
	bookContainer.attr('class', 'col-md-6 col-12')
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

fetch(queryURL)
	.then(function (reponse) {
		return reponse.json()
	})
	.then(function (data) {
		const bookItems = data.items
		console.log(bookItems[0])
		for (let i = 0; i < bookItems.length; i++) {
			let title = bookItems[i].volumeInfo.title
			let authorName = bookItems[i].volumeInfo.authors
			let image = bookItems[i].volumeInfo.imageLinks.smallThumbnail
			let year = bookItems[i].volumeInfo.imageLinks.smallThumbnail
			// console.log(image)
			let description = bookItems[i].searchInfo.textSnippet
			showBookContainer(image, title, authorName, description)
		}
	})
