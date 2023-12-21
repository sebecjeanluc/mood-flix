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

genreId = moodToGenre.Happy;

let movieQueryURL = "https://api.themoviedb.org/3/discover/movie?include_adult=true&with_genres=" + genreId + "&language=en&api_key=668bc020b016a4e4178a7d0b2987ac04";

fetch(movieQueryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.error(error);
    });

//Genre title description rating year

