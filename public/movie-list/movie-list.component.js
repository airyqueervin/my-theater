'use strict';

// Register `movieList` component, along with its associated controller and template
angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    // template:
    //   '<ul>' +
    //     '<li ng-repeat="movie in $ctrl.movies">' +
    //       '<span>{{movie.name}}</span>' +
    //       '<p>{{movie.snippet}}</p>' +
    //     '</li>' +
    //   '</ul>',
    controller: function MovieListController() {
    this.movies = [
      {
        name: 'Logan',
        snippet: 'He is the last Wolverine!'
      },
      {
        name: 'Lego-Batman',
        snippet: 'Always gets it on the first try.'
      },
      {
        name: 'Hidden Figures',
        snippet: 'Fantastic Oscar Worthy!'
      },
      {
        name: 'John Wick 2',
        snippet: 'Ohhhhh....SNAP!'
      }
    ];
  }
});