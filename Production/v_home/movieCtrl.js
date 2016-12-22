angular.module("ucritic").controller("movieCtrl", function($scope, homeSvc) {
  $scope.currentMovie = homeSvc.getMovie();
  $scope.changeView = function(view) {
    $location.path(view);
  }
});
