angular.module('ticTacToe', [
  'ticTacToe.game',
  'ticTacToe.userAccess',
  'ngRoute'
  ])
.config(function($routeProvider, $httpProvider, $locationProvider) {
  $routeProvider
    .when('/game', {
        templateUrl: 'app/game/game.html',
        controller: 'GameController'
    })
    .when('/login', {
      templateUrl: 'app/userAccess/login.html',
      controller: 'userAccessController'
    })
    .otherwise({redirectTo: '/game'});

  // $locationProvider.html5Mode(true);
}).run(function($location) {
  
});