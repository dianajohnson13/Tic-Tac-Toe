angular.module('ticTacToe.game', [])

.controller('GameController', function($scope, $location) {
  $scope.board; 

  $scope.resetBoard = function() {
    $scope.board = {
      TL: {row:0,col:0,spot:"-"}, TM: {row:0,col:1,spot:"-"}, TR: {row:0,col:2,spot:"-"},
      ML: {row:1,col:0,spot:"-"}, MM: {row:1,col:1,spot:"-"}, MR: {row:1,col:2,spot:"-"},
      BL: {row:2,col:0,spot:"-"}, BM: {row:2,col:1,spot:"-"}, BR: {row:2,col:2,spot:"-"}
    };
  };

  $scope.resetBoard();

  $scope.playerOne = {name: 'Human', mark: 'X', id: 1};
  $scope.playerTwo = {name: 'Computer', mark: 'O', id: 2};
  $scope.currPlayer = $scope.playerOne.id;

  $scope.clickCell = function(cell) {
    if ($scope.board[cell].spot === "-" && $scope.currPlayer == $scope.playerOne.id) {
      //mark cell with playersMark
      $scope.board[cell].spot = $scope.playerOne.mark; 
      $scope.handleMove();
    } else if ($scope.currPlayer == $scope.playerOne.id) {
      alert("That spot is taken! Please choose an empty space");
    } else {
      alert("It's not your turn yet!");
    }
  };

  $scope.handleMove = function() {
    if ($scope.checkForWin()) {
      var resp = confirm(' has won the game! Click "OK" to play again.');
      if (resp = true) {
        $scope.resetBoard();
        $location.path('/game');
      }

    } else if ($scope.currPlayer === $scope.playerOne.id) {
        $scope.currPlayer = $scope.playerTwo.id;
        $scope.computerPlayerMove();
      } else {
        $scope.currPlayer = $scope.playerOne.id;
      }
  };

  $scope.checkForWin = function() {
    // all that good logic
    // if no one won, but all spaces are filled.. confirm("game over. no winner")
    return false;
  }

  $scope.computerPlayerMove = function() {
    // get random move..
    console.log('attempting computer move');
    setTimeout(function() {
      $scope.currPlayer = $scope.playerOne.id;
    }, 200); // change to promise
    
  }

});

