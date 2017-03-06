// Define the `phonecatApp` module
var myTheaterApp = angular.module('myTheaterApp', [])

// Define the `MovieListController` controller on the `myTheaterApp` module
.controller('MovieListController', function MovieListController($scope) {
  $scope.text = 'Hello World';
  $scope.movies = [
    {
      name: 'Logan',
      snippet: 'He is the last Wolverine!'
    }, {
      name: 'Lego-Batman',
      snippet: 'Always gets it on the first try.'
    }, {
      name: 'La-la-land',
      snippet: 'It won some Oscars.'
    }
  ];
});