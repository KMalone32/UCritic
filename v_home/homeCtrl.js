angular.module("ucritic").controller("homeCtrl", function($scope, homeSvc) {
  $scope.service = homeSvc;
  $scope.viewMovie = true;
  $scope.viewComment = false;
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
  $scope.displayNewComment = function(comment) {
    if (comment === "") {
      $scope.viewComment = false;
    } else {
      $scope.viewComment = true;
    }
  }
  $scope.addComment = function(comment) {
    if (comment !== "") {
      homeSvc.addComment(comment);
      $scope.userComment = "";
      $scope.viewComment = false;
    }
  }
});
