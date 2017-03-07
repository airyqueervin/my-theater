'use strict';

// Register `movieList` component, along with its associated controller and template
angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: function MovieListController() {
    this.movies = [
      {
        name: 'Logan',
        snippet: 'He is the last Wolverine!',
        age: 1
      },
      {
        name: 'Lego-Batman',
        snippet: 'Always gets it on the first try.',
        age: 2
      },
      {
        name: 'Hidden Figures',
        snippet: 'Fantastic Oscar Worthy!',
        age: 4
      },
      {
        name: 'John Wick 2',
        snippet: 'Ohhhhh....SNAP!',
        age: 3
      }
    ];
    this.orderProp = 'age';
  }
});