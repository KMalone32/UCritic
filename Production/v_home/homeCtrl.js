angular.module("ucritic").controller("homeCtrl", function($scope, homeSvc) {
  $scope.searchMovie = function(movie) {
    homeSvc.getMovies(movie).then(function(response) {
      $scope.movies = response;
    });
  }
  $scope.saveMovie = function(movie) {
    homeSvc.saveMovie(movie);
  }
});
