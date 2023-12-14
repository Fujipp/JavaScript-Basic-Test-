function ProductManagement() {
  //add products variable here
  class Movies {
    constructor() {
      this.movies = [];
    }
   
    getAllMovies() {
      return this.movies;
    }
   
    addMovie(title, director, year, genre) {
      if (
        title === undefined ||
        director === undefined ||
        year === undefined ||
        genre === undefined
      ) {
        return undefined;
      }
      let searchMovie = this.movies.find(
        (movie) =>
          movie.title.toLowerCase() === title.toLowerCase() &&
          movie.director.toLowerCase() === director.toLowerCase()
      );
      if (searchMovie !== undefined) {
        return undefined;
      }
      const newMovie = {
        title: title,
        director: director,
        year: year,
        genre: genre,
      };
      this.movies.push(newMovie);
      return newMovie;
    }
   
    updateMovie(title, obj) {
      let findMovie = this.movies.find(
        (movie) => movie.title.toLowerCase() === title.toLowerCase()
      );
      if (findMovie === undefined) {
        return findMovie;
      }
      let { director, year, genre } = obj;
      if (director !== undefined) {
        findMovie.director = director;
      }
      if (year !== undefined) {
        findMovie.year = year;
      }
      if (genre !== undefined) {
        findMovie.genre = genre;
      }
      return findMovie;
    }
   
    deleteMovieByTitle(title) {
      let targetIndex = this.movies.findIndex(
        (movie) => movie.title.toLowerCase() === title.toLowerCase()
      );
      if (targetIndex === -1) {
        return;
      } else {
        this.movies.splice(targetIndex, 1);
      }
    }
  }

  function getAllProducts() {}

  function addProduct(product) {}

  function searchByName(name) {}

  function searchByPriceRange(minPrice, maxPrice) {}

  function removeAll() {}

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct
  }
}
module.exports = ProductManagement
const productCatalog = ProductManagement()