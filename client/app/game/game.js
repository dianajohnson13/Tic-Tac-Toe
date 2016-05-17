angular.module('ticTacToe.game', [])

.controller('GameController', function($scope) {
  $scope.board = [
        ["X", "X", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ]

  $scope.clickCell = function() {
    console.log("cell clicked!")
  }

})