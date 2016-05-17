angular.module('ticTacToe.game', [])

.controller('GameController', function($scope) {
  $scope.board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ];

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

      $scope.board[modelRef[cell].row][modelRef[cell].col] = $scope.playerOne.mark; //mark cell with playersMark
      // check if game has been won.. checkForWin()

    } else if ($scope.currPlayer == $scope.playerOne.id) {
      alert("That spot is taken! Please choose an empty space");
    } else {
      alert("It's not your turn yet!");
    }
  };

  $scope.checkForWin = function() {
    //if win 
      //alert($scope.currPlayer.name + ' has won the game!');
    // else if ($scope.currPlayer === $scope.playerOne)
      //$scope.currPlayer = $scope.playerTwo;
    // else
      //$scope.currPlayer = $scope.playerTwo;

  };

})