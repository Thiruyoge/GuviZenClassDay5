class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

// Method to filter movies with a rating of "PG"
function getPG(movieArray) {
  return movieArray.filter(movie => movie.rating === "PG");
}

// Example usage:
const movies = [
  new Movie("Movie1", "Studio1", "PG"),
  new Movie("Movie2", "Studio2", "PG-13"),
  new Movie("Movie3", "Studio3", "PG"),
  new Movie("Movie4", "Studio4", "G"),
];

const pgMovies = getPG(movies);
console.log(pgMovies);
