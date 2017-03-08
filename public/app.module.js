var myTheaterApp = angular.module('myTheaterApp', [
  'movieList',
  'ngRoute'
])
.value('$routerRootComponent', 'myTheaterApp')
.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'movie-list/movie-list.html',
      controller: 'MovieListController'
    })
    .when('/movieoverview', {
      template: '<h1>Home</h1><p>Hello, {{ $ctrl.movies }} !</p>',
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

