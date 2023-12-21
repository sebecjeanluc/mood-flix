let moodSearch = $('#moodSearch');
let movieSection = $('#movieSection');



let moodArray = ["Happy", "Sad", "Excited", "Nostalgic", "Romantic", "Weird"];

let moodToGenre = {
    "Happy": 35, // Happy would mean genre Comedy the number is from the API documentation for each genre
    "Sad": 18, // Drama
    "Excited": 28, // Action
    "Nostalgic": 10751, // Family
    "Romantic": 10749, // Romance
    "Weird": 878, // Science Fiction
};

genreId = moodToGenre.Weird;

let movieQueryURL = "https://api.themoviedb.org/3/discover/movie?include_adult=true&with_genres=" + genreId + "&language=en&api_key=668bc020b016a4e4178a7d0b2987ac04";

fetch(movieQueryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.results);
        let movieArray = data.results;
        for (let i = 0; i < movieArray.length; i++) {
            let newCol = $('<div>').addClass('col');
            movieSection.append(newCol);

            let newCard = $('<div>').addClass('card'); //.css("width", "10rem")
            newCol.append(newCard);

            let moviePoster = $('<img>').addClass('card-img-top');
            let getposterinfo = movieArray[i].poster_path;
            moviePoster.attr("src","https://www.themoviedb.org/t/p/w220_and_h330_face"+ getposterinfo);
            newCard.append(moviePoster);

            let cardBody = $('<div>').addClass('card-body');
            let movieTitle = $('<h5>').addClass('card-title').text(movieArray[i].title);
            let movieOwerview = $('<p>').addClass('card-text').text(movieArray[i].overview);
            
            newCard.append(cardBody);

            let movieReleaseYear = $('<p>').addClass('card-text').text("Release Year: " + (dayjs(movieArray[i].release_date)).format("YYYY"));
            let rating = $('<p>').addClass('card-text').text("Rating: " + (movieArray[i].vote_average))
            cardBody.append(movieTitle, movieOwerview, movieReleaseYear, rating);
        }
    })
    .catch(function (error) {
        console.error(error);
    });

//Genre title description rating year

