// const mainBodyEl = document.getElementById('mainBody')
// const moodSectionEl = document.getElementById('moodSection')
// const categorySearch = document.getElementById('categorySearch')
// const moodSearchEl = document.getElementById('moodSearch')
// const movieSection = document.getElementById('movieSection')
// const favedSection = document.getElementById('favedSection')
// const bookSection = document.getElementById('bookSection')
// let footerEl = document.querySelector('.footer')


// query

// const savedItemsHTML = `
// <div class="saved-cards">
//     <div class="card-body".
//         <h5 class="card-title">${favedSection}</h5>
//         <img src="" alt="saved-items">
//         <p class="genre">Genre</p>
//         <p class="title">Title</p>
//         <p class="rating">Rating</p>
//         <p class="description"></p>
//         <p class="year">Year</p>
//     </div>
// </div>
// `
// let favedCardDiv = $('<div>')
// favedCardDiv.addClass('card fave-card')
// favedCardDiv.css( "width", "18rem")

// let favedCardDivImg = $("<img>")
// favedCardDivImg.attr("src")
// favedCardDivImg.addClass("card-img-top")
// favedCardDivImg.attr("alt", "...")
//  let favedCardDivUl = $('<ul>')
//  favedCardDivUl.addClass("list-group list-group-flush text-start")

//  let favedCardDivLiGenre = $('<li>')
//  favedCardDivLiGenre.addClass("list-group-item")
//  favedCardDivLiGenre.text('Genre:')

//  let favedCardDivLiTitle = $('<li>')
//  favedCardDivLiTitle.addClass("list-group-item")
//  favedCardDivLiTitle.text('Title:')

//  let favedCardDivLiDescription = $('<li>')
//  favedCardDivLiDescription.addClass("list-group-item")
//  favedCardDivLiDescription.text('Description:')

//  let favedCardDivLiRating = $('<li>')
//  favedCardDivLiRating.addClass("list-group-item")
//  favedCardDivLiRating.text('Rating:')

//  let favedCardDivLiYear = $('<li>')
//  favedCardDivLiYear.addClass("list-group-item")
//  favedCardDivLiYear.text('Year:')

//  favedCardDivUl.append(favedCardDivLiGenre, favedCardDivLiTitle,favedCardDivLiDescription, favedCardDivLiRating, favedCardDivLiYear)

//  favedCardDiv.append(favedCardDivImg, favedCardDivUl)

//  let faveCardSection = $("#faved-section")
//  faveCardSection.append(favedCardDiv)

// Function creating favourite cards

function favouriteCardDiv(cardImageSrc, cardGenre, cardTitle, cardDescription, cardRating, cardYear) {
    let favedCardDiv = $('<div>')
    favedCardDiv.addClass('card fave-card')
    favedCardDiv.css("width", "18rem")

    let favedCardDivImg = $("<img>")
    favedCardDivImg.attr("src", cardImageSrc)
    favedCardDivImg.addClass("card-img-top")
    favedCardDivImg.attr("alt", "...")
    let favedCardDivUl = $('<ul>')
    favedCardDivUl.addClass("list-group list-group-flush text-start")

    let favedCardDivLiGenre = $('<li>')
    favedCardDivLiGenre.addClass("list-group-item")
    favedCardDivLiGenre.text('Genre:' + cardGenre) 

    let favedCardDivLiTitle = $('<li>')
    favedCardDivLiTitle.addClass("list-group-item")
    favedCardDivLiTitle.text('Title:' + cardTitle)

    let favedCardDivLiDescription = $('<li>')
    favedCardDivLiDescription.addClass("list-group-item")
    favedCardDivLiDescription.text('Description:' + cardDescription)

    let favedCardDivLiRating = $('<li>')
    favedCardDivLiRating.addClass("list-group-item")
    favedCardDivLiRating.text('Rating:'+ cardRating)

    let favedCardDivLiYear = $('<li>')
    favedCardDivLiYear.addClass("list-group-item")
    favedCardDivLiYear.text('Year:' + cardYear)

    favedCardDivUl.append(favedCardDivLiGenre, favedCardDivLiTitle, favedCardDivLiDescription, favedCardDivLiRating, favedCardDivLiYear)

    favedCardDiv.append(favedCardDivImg, favedCardDivUl)

    let faveCardSection = $("#faved-section")
    faveCardSection.append(favedCardDiv)
}

favouriteCardDiv(favouriteItemsObject.src, " cardGenre1", " cardTitle1", " cardDescription1", " cardRating1", " cardYear1" )
favouriteCardDiv("...", " cardGenre2", " cardTitle2", " cardDescription2", " cardRating2", " cardYear2")

// create local storage
var favouriteItemsObject = {
    src: "...",
    genre: "",
    title: "",
    description: "",
    rating: "",
    year: ""
}


// function saveItemsInStorage() {
//     const saveItemsInStorage = object.keys(localStorage)
// }


{/* <div class="card fave-card" style="width: 18rem;">
								<!--Jquery div for card goes here -->
								
							<img src="..." class="card-img-top" alt="...">
							<ul class="list-group list-group-flush text-start">
							  <li class="list-group-item">Genre:</li>
							  <li class="list-group-item">Title:</li>
							  <li class="list-group-item">Description:</li>
							  <li class="list-group-item">Rating:</li>
							  <li class="list-group-item">Year:</li>
							</ul>
						  </div> */}