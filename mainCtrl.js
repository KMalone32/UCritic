angular.module("ucritic").controller("mainCtrl", function($scope, homeSvc) {
  $scope.searchMovie = function(movie) {
    homeSvc.getMovies(movie);
  }
});
