angular.module('ticTacToe', [
  'ticTacToe.game',
  'ngRoute'
  ])
.config(function($routeProvider, $httpProvider, $locationProvider) {
  $routeProvider
    .when('/game', {
        templateUrl: 'app/game/game.html',
        controller: 'GameController'
    })
    .otherwise({redirectTo: '/game'});

  $locationProvider.html5Mode(true);
}).run(function($location) {
  
});