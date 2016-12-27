angular.module("ucritic").controller("homeCtrl", function($scope, homeSvc) {
  $scope.service = homeSvc;
  $scope.viewMovie = true;
  $scope.viewComment = false;
  var isActive = false;
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
  $scope.minimize = function($event) {
    var state = angular.element($event.currentTarget)[0].innerText;
    if (state === "Minimize") {
      angular.element($event.currentTarget)[0].innerText = "Maximize";
      angular.element($event.currentTarget).parent().parent().parent().children().eq(2).css("display", "none");
    } else if (state === "Maximize") {
      angular.element($event.currentTarget)[0].innerText = "Minimize";
      angular.element($event.currentTarget).parent().parent().parent().children().eq(2).css("display", "block");
    }
  }
  $scope.reply = function($event) {
    if (isActive) {
      angular.element($event.currentTarget).parent().parent().parent().children().eq(2).children().eq(1).css("display", "none");
      isActive = false;
    } else {
      angular.element($event.currentTarget).parent().parent().parent().children().eq(2).children().eq(1).css("display", "block");
      isActive = true;
    }
  }
});
