var myTheaterApp = angular.module('myTheaterApp', [
  'movieList',
  'ngRoute'
])
.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'movie-list/movie-list.html',
      controller: 'MovieListController'
    })
    .when('/overview', {
      templateUrl: 'movie-list/movie-list.html',
      controller: 'MovieListController'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}])
.controller('MovieListController', ['$route', '$routeParams', '$location',
  function MovieListController($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}])

