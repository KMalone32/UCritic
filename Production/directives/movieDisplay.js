angular.module("ucritic").directive("movieDisplay", function() {
  return {
    restrict: 'E',
    template: '<div ng-include="contentUrl"></div>',
    link: function(scope, element, attributes) {
      scope.contentUrl = 'Production/v_home/movie.html';
      element.on("click", function() {
         scope.contentUrl = 'Production/v_home/movieInfo.html';
         scope.getMovie();
         console.log(scope);
      });
    },
    controller: function($scope, homeSvc) {
      // $scope.getListMovies = function() {
      //   $scope.listMovies = homeSvc.getListMovies();
      // }
      $scope.getMovie = function() {
        $scope.movies = homeSvc.getMovies();
      }
    }
  }
});
