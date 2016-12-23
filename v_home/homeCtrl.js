angular.module("ucritic").controller("homeCtrl", function($scope, homeSvc) {
  $scope.service = homeSvc;
  $scope.viewMovie = true;
  $scope.saveMovie = function(movie) {
    console.log(movie);
    homeSvc.saveMovie(movie);
  }
  $scope.$watch('service.getListMovies()', function(newVal) {
    $scope.movies = newVal;
  });
  $scope.$watch('service.getView()', function(newVal) {
    $scope.viewMovie = newVal;
  });
  $scope.toggleView = function(movie) {
    $scope.curMovie = homeSvc.saveMovie(movie);
    homeSvc.toggleView($scope.viewMovie);
  }
});
