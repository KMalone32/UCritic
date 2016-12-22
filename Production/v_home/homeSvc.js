angular.module("ucritic").service("homeSvc", function($http, $q) {

  var currentMovie;
  var listMovies = [];

  this.getMovies = function(movie) {
    var defer = $q.defer();
    $http ({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=*' + movie + '*&type=movie'
    }).then(function(omdbapi) {
      var movies = omdbapi.data.Search;
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].Poster != "N/A") {
          listMovies.push(movies[i]);
        }
      }
      defer.resolve(listMovies);
    });
    return defer.promise;
  }

  this.saveMovie = function(movie) {
    currentMovie = movie;
  }

  this.getMovie = function() {
    return currentMovie;
  }

  this.getListMovies = function() {
    return listMovies;
  }

});
