let moodSearch = $('#mood-search');
let movieSection = $('#movie-section');
let moodButtons = $('#mood-buttons');

let moodToGenre = {
    "Happy": 35, // Happy would mean genre Comedy the number is from the API documentation for each genre
    "Sad": 18, // Drama
    "Gloomy": 99, // Documentary
    "Excited": 28,   // Action
    "Angry": 10752, // War
    "Romantic": 10749, // Romance
    "Weird": 878, // Science Fiction
};

let generateMovieCards = function (mood) {
    // Get the genre ID for the selected mood by user
    genreId = moodToGenre[mood];

    let movieQueryURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=" + genreId + "&language=en&api_key=668bc020b016a4e4178a7d0b2987ac04&sort_by=popularity.desc";
    // Fetch movie data
    fetch(movieQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.results);
            // to clear any existing movies
            movieSection.find('.row').empty();

            let movieArray = data.results;

            let movieContainer = $('<div>').addClass('row');
            movieSection.append(movieContainer);

            for (let i = 0; i < movieArray.length; i++) {
                let newCol = $('<div>').addClass('col-md-6 col-12 mb-2');
                movieContainer.append(newCol);

                let newCard = $('<div>').addClass('card');
                newCol.append(newCard);

                let moviePoster = $('<img>').addClass('card-img-top');
                let getposterinfo = movieArray[i].poster_path;
                moviePoster.attr("src", "https://www.themoviedb.org/t/p/w220_and_h330_face" + getposterinfo);
                newCard.append(moviePoster);

                let cardBody = $('<div>').addClass('card-body');
                let movieTitle = $('<h5>').addClass('card-title').text(movieArray[i].title);
                let movieOwerview = $('<p>').addClass('card-text').text(movieArray[i].overview);

                let shortOverview = shortenedOverview(movieArray[i].overview, 30);
                movieOwerview.text(shortOverview);

                newCard.append(cardBody);

                let movieReleaseYear = $('<p>').addClass('card-text').html("<strong>Release Year: </strong>" + (dayjs(movieArray[i].release_date)).format("YYYY"));
                let rating = $('<p>').addClass('card-text').html("<strong>Rating: </strong>" + (movieArray[i].vote_average));

                let genre = $('<p>').addClass('card-text').html('<strong>Genres: </strong>' + getGenreName(movieArray[i].genre_ids));

                cardBody.append(movieTitle, movieOwerview, movieReleaseYear, rating, genre);
            }
        })
        .catch(function (error) {
            console.error(error);
        });

};

moodButtons.on("click", function (event) {

    if (event.target.tagName === 'BUTTON') {
        // to get the text info of the clicked button
        let userMoodSelection = event.target.textContent;
        generateMovieCards(userMoodSelection);
    }



});

let getGenreName = function (genreIds) {
    const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" }
    ];

    const genreNamesArray = genreIds.map(genreId => {
        const genre = genres.find(genre => genre.id === genreId);

        if (genre) {
            return genre.name;
        } else {
            return "Unknown Genre";
        };

    });

    return genreNamesArray.join(', ');
};

const fetchRandomMovies = function () {
    let randomMovieURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en&api_key=668bc020b016a4e4178a7d0b2987ac04&sort_by=popularity.desc&page=" + Math.floor(Math.random() * 500); // Get random page from API

    fetch(randomMovieURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            movieSection.find('.row').empty();

            let movieArray = data.results;

            let movieContainer = $('<div>').addClass('row');
            movieSection.append(movieContainer);

            for (let i = 0; i < movieArray.length; i++) {
                let newCol = $('<div>').addClass('col-md-6 col-12 mb-2');
                movieContainer.append(newCol);

                let newCard = $('<div>').addClass('card');
                newCol.append(newCard);

                let moviePoster = $('<img>').addClass('card-img-top');
                let getposterinfo = movieArray[i].poster_path;
                moviePoster.attr("src", "https://www.themoviedb.org/t/p/w220_and_h330_face" + getposterinfo);
                newCard.append(moviePoster);

                let cardBody = $('<div>').addClass('card-body');
                let movieTitle = $('<h5>').addClass('card-title').text(movieArray[i].title);
                let movieOwerview = $('<p>').addClass('card-text').text(movieArray[i].overview);

                let shortOverview = shortenedOverview(movieArray[i].overview, 30);
                movieOwerview.text(shortOverview);

                newCard.append(cardBody);

                let movieReleaseYear = $('<p>').addClass('card-text').html("<strong>Release Year: </strong>" + (dayjs(movieArray[i].release_date)).format("YYYY"));
                let rating = $('<p>').addClass('card-text').html("<strong>Rating: </strong>" + (movieArray[i].vote_average));

                let genre = $('<p>').addClass('card-text').html('<strong>Genres: </strong>' + getGenreName(movieArray[i].genre_ids));

                cardBody.append(movieTitle, movieOwerview, movieReleaseYear, rating, genre);
            }
        })
        .catch(function (error) {
            console.error(error);
        });
};

//fetch random movies when the page is loaded
$(document).ready(function () {
    fetchRandomMovies();
});


const shortenedOverview = function(textContent, limit){
    const words = textContent.split(' ');

    if (words.length > limit) {
        const shortenedWords = words.slice(0, limit);
        return shortenedWords.join(' ') + '...'
    } else {
        return textContent;
    };
};