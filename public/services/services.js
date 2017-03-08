angular.module('myTheater', [])

.factory('Movies', function ($http) {
  // Your code here
  var apikey = "myapikey";
  var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
  // construct the uri with our apikey
  var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
  var query = "Gone with the Wind";

  var getMovie = function() {
    return $http({
      method: 'GET',
      url: moviesSearchUrl;
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/movies'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addOne = function (movie) {
    return $http({
      method: 'POST',
      url: '/api/movies',
      data: movie
    });
  };

  return {
    getAll: getAll,
    addOne: addOne,
    getMovie: getMovie
  };
})
// .factory('Auth', function ($http, $location, $window) {
//   // Don't touch this Auth service!!!
//   // it is responsible for authenticating our user
//   // by exchanging the user's username and password
//   // for a JWT from the server
//   // that JWT is then stored in localStorage as 'com.shortly'
//   // after you signin/signup open devtools, click resources,
//   // then localStorage and you'll see your token from the server
//   var signin = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signin',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var signup = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signup',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var isAuth = function () {
//     return !!$window.localStorage.getItem('com.myTheater');
//   };

//   var signout = function () {
//     $window.localStorage.removeItem('com.myTheater');
//     $location.path('/signin');
//   };


//   return {
//     signin: signin,
//     signup: signup,
//     isAuth: isAuth,
//     signout: signout
//   };
// });