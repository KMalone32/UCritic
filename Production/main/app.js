angular.module("ucritic", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    templateUrl: 'Production/v_home/home.html',
    url: '/',
    controller: 'homeCtrl'
  })
  .state('blog', {
    templateUrl: 'Production/v_blog/blog.html',
    url: '/blog',
    controller: 'blogCtrl'
  })
  .state('profile', {
    templateUrl: 'Production/v_profile/profile.html',
    url: '/profile',
    controller: 'profileCtrl'
  })
  .state('theater', {
    templateUrl: 'Production/v_theater/theater.html',
    url: '/theater',
    controller: 'theaterCtrl'
  })
  .state('movie', {
    templateUrl: 'Production/v_movie/movie.html',
    url: '/movie',
    controller: 'movieCtrl'
  });

});
