angular.module('ticTacToe.game', [])

.controller('GameController', function($scope, $location) {
  $scope.board; 
  $scope.playsMade;

  // add wins and games played

  $scope.resetBoard = function() {
    $scope.playsMade = 0;
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
      $scope.board[cell].spot = $scope.playerOne.mark; 
      $scope.handleMove($scope.playerOne.name, $scope.playerOne.mark);
    } else if ($scope.currPlayer == $scope.playerOne.id) {
      alert("That spot is taken! Please choose an empty space");
    } else {
      alert("It's not your turn yet!");
    }
  };

  $scope.handleMove = function(player, mark) {
    $scope.playsMade++;

    if ($scope.checkForWin(mark)) {
      var resp = confirm(player + ' has won the game! Click "OK" to play again.');
      if (resp) {
        $scope.resetBoard();
        $location.path('/game');
      }
    }

    if ($scope.currPlayer === $scope.playerOne.id) {
      $scope.currPlayer = $scope.playerTwo.id;
      $scope.computerPlayerMove();
    } else {
      $scope.currPlayer = $scope.playerOne.id;
    }
  };

  $scope.checkForWin = function(mark) {
    if ($scope.board['TL'].spot === mark && $scope.board['TM'].spot ===  mark && $scope.board['TR'].spot === mark) return true;
    if ($scope.board['ML'].spot === mark && $scope.board['MM'].spot ===  mark && $scope.board['MR'].spot === mark) return true;
    if ($scope.board['BL'].spot === mark && $scope.board['BM'].spot ===  mark && $scope.board['BR'].spot === mark) return true;
    if ($scope.board['TL'].spot === mark && $scope.board['ML'].spot ===  mark && $scope.board['BL'].spot === mark) return true;
    if ($scope.board['TM'].spot === mark && $scope.board['MM'].spot ===  mark && $scope.board['BM'].spot === mark) return true;
    if ($scope.board['TR'].spot === mark && $scope.board['MR'].spot ===  mark && $scope.board['BR'].spot === mark) return true;
    if ($scope.board['TL'].spot === mark && $scope.board['MM'].spot ===  mark && $scope.board['BR'].spot === mark) return true;
    if ($scope.board['BL'].spot === mark && $scope.board['MM'].spot ===  mark && $scope.board['TR'].spot === mark) return true;
    if ($scope.playsMade === 9) {
      var resp = confirm('Tie Game. Click "OK" to play again');
      if (resp) {
        $scope.resetBoard();
        $location.path('/game');
      }
    }
    return false;
  }

  $scope.computerPlayerMove = function() {
    // get random move..
    $scope.handleMove($scope.playerTwo.name, $scope.playerTwo.mark);
  }

});

