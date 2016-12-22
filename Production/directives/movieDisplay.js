angular.module("ucritic").directive("movieDisplay", function() {
  return {
    restrict: 'E',
    templateUrl: 'Production/v_home/movie.html',
    link: function(scope, element, attributes) {
      element.on("click", function() {
        alert("here");
      })
    },
    controller: function($scope, homeSvc) {
      $scope.getListMovies = function() {
        $scope.listMovies = homeSvc.getListMovies();
      }
      $scope.getMovie = function() {
        $scope.movies = homeSvc.getMovies();
      }
    }
  }
});
