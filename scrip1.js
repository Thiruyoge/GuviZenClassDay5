

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a 
// String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

const movie1 = new Movie("The Shawshank Redemption", "Warner Bros.", "R");
const movie2 = new Movie("Inception", "Paramount Pictures", "PG-13");

console.log(movie1);
console.log(movie2);
