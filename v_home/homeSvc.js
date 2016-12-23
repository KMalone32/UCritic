angular.module("ucritic").service("homeSvc", function($http) {

  var currentMovie;
  var listMovies = [];
  var currentView = true;

  this.getMovies = function(movie) {
    currentView = true;
    $http ({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=*' + movie + '*&type=movie'
    }).then(function(omdbapi) {
      var movies = omdbapi.data.Search;
      var nMovies = [];
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].Poster != "N/A") {
          nMovies.push(movies[i]);
        }
      }
      listMovies = nMovies;
    });
  }

  this.saveMovie = function(movie) {
    currentMovie = movie;
    return currentMovie;
  }

  this.getMovie = function() {
    return currentMovie;
  }

  this.getListMovies = function() {
    return listMovies;
  }

  this.getView = function() {
    return currentView;
  }

  this.toggleView = function(view) {
    currentView = !view;
  }

});
