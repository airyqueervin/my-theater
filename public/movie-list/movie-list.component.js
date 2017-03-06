'use strict';

// Register `movieList` component, along with its associated controller and template
angular.
  module('myTheaterApp').
  component('movieList', {
    template:
        '<ul>' +
          '<li ng-repeat="movie in $ctrl.movies">' +
            '<span>{{movie.name}}</span>' +
            '<p>{{movie.snippet}}</p>' +
          '</li>' +
        '</ul>',
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
        name: 'La-la-land',
        snippet: 'It won some Oscars.'
      },
      {
        name: 'John Wick 2',
        snippet: 'Ohhhhh....SNAP!'
      }
    ];
  }
});