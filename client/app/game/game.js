angular.module('ticTacToe.game', [])

.controller('GameController', function($scope, $location) {
  $scope.board; 

  $scope.resetBoard = function() {
    $scope.board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"]
    ];
  };

  $scope.resetBoard();

  const modelRef = {
    TL: {row:0,col:0}, TM: {row:0,col:1}, TR: {row:0,col:2},
    ML: {row:1,col:0}, MM: {row:1,col:1}, MR: {row:1,col:2},
    BL: {row:2,col:0}, BM: {row:2,col:1}, BR: {row:2,col:2}
  }

  $scope.playerOne = {name: 'Human', mark: 'X', id: 1};
  $scope.playerTwo = {name: 'Computer', mark: 'O', id: 2};
  $scope.currPlayer = $scope.playerOne.id;

  $scope.clickCell = function(cell) {
    if ($scope.board[modelRef[cell].row][modelRef[cell].col] === "-" && $scope.currPlayer == $scope.playerOne.id) {
      //mark cell with playersMark
      $scope.board[modelRef[cell].row][modelRef[cell].col] = $scope.playerOne.mark; 
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
    //all that good logic
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

