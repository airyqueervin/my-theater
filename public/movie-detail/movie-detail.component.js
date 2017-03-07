'use strict';

// Register `movieDetail` component, along with its associated controller and template
angular.
  module('movieDetail').
  component('movieDetail', {
    templateUrl: 'movie-detail/movie-detail.template.html',
    controller: ['$routeParams', 'Movie',
      function MovieDetailController($routeParams, Movie) {
        var self = this;
        self.movie = Movie.get({movieId: $routeParams.movieId}, function(movie) {
          self.setImage(movie.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
