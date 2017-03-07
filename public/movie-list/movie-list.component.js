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
        snippet: 'This is the last Wolverine!',
        age: 1,
        url: 'https://www.youtube.com/watch?v=DekuSxJgpbY'
      },
      {
        name: 'Lego-Batman',
        snippet: 'Always gets it on the first try!',
        age: 2,
        url: 'https://www.youtube.com/watch?v=rGQUKzSDhrg'
      },
      {
        name: 'Hidden Figures',
        snippet: 'Fantastic Oscar Worthy!',
        age: 4,
        url: 'https://www.youtube.com/watch?v=RK8xHq6dfAo'
      },
      {
        name: 'John Wick 2',
        snippet: 'Ohhhhh....SNAP!',
        age: 3,
        url: 'https://www.youtube.com/watch?v=ChpLV9AMqm4'
      }
    ];
    this.orderProp = 'age';

  }
});