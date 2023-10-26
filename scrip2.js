class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
  }
}

const movie1 = new Movie("The Shawshank Redemption", "Warner Bros.");
const movie2 = new Movie("Inception", "Paramount Pictures", "PG-13");
const movie3 = new Movie("Family Movie", "Family Studios");

console.log(movie1); 
console.log(movie2); 
console.log(movie3); 
