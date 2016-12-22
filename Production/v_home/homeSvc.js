angular.module("ucritic").service("homeSvc", function($http, $q) {

  var currentMovie;

  this.getMovies = function(movie) {
    var defer = $q.defer();
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
      defer.resolve(nMovies);
    });
    return defer.promise;
  }

  this.saveMovie = function(movie) {
    currentMovie = movie;
  }

  this.getMovie = function() {
    console.log(currentMovie);
    return currentMovie;
  }

});
