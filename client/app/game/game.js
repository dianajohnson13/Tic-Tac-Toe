angular.module('ticTacToe.game', [])

.controller('GameController', function($scope, $location) {
  $scope.board; 
  $scope.playsMade;
  $scope.remainingSpots;

  $scope.resetBoard = function() {
    $scope.playsMade = 0;
    $scope.board = {
      TL: {row:0,col:0,spot:"-"}, TM: {row:0,col:1,spot:"-"}, TR: {row:0,col:2,spot:"-"},
      ML: {row:1,col:0,spot:"-"}, MM: {row:1,col:1,spot:"-"}, MR: {row:1,col:2,spot:"-"},
      BL: {row:2,col:0,spot:"-"}, BM: {row:2,col:1,spot:"-"}, BR: {row:2,col:2,spot:"-"}
    };
    //$scope.$apply();
  };

  $scope.playerOne = {name: 'Human', mark: 'X', gamesPlayed: 0, wins: 0};
  $scope.playerTwo = {name: 'Computer', mark: 'O'};
  
  $scope.clickCell = function(cell) {
    if ($scope.board[cell].spot === "-" && $scope.currPlayer == $scope.playerOne) {
      $scope.markPosition(cell)
      $scope.handleMove();
    } else if ($scope.currPlayer === $scope.playerOne) {
      alert("That spot is taken! Please choose an empty space");
    } else {
      alert("It's not your turn yet!");
    }
  };

  $scope.markPosition = function(cell) {
    $scope.board[cell].spot = $scope.currPlayer.mark;
    $scope.removeFromRemaining($scope.remainingSpots.indexOf(cell));
  }

  $scope.handleMove = function() {
    $scope.playsMade++;
    $scope.checkForWin();
  };

  $scope.changePlayer = function() {
    if ($scope.currPlayer === $scope.playerOne) {
      $scope.currPlayer = $scope.playerTwo;
      $scope.computerPlayerMove();
    } else {
      $scope.currPlayer = $scope.playerOne;
    }
  }

  $scope.computerPlayerMove = function() {
    var randomIdx = Math.floor(Math.random()*$scope.remainingSpots.length);
    var cell = $scope.remainingSpots[randomIdx];
    
    $scope.removeFromRemaining(randomIdx);
    $scope.board[cell].spot = $scope.currPlayer.mark; 
    $scope.handleMove();
  }

  $scope.removeFromRemaining = function(idx) {
    $scope.remainingSpots = $scope.remainingSpots.slice(0, idx).concat($scope.remainingSpots.slice(idx+1))
  }

  $scope.initGame = function() {
    console.log("INITTING!!")
    $location.path('/game');
    $scope.resetBoard();
    $scope.remainingSpots = Object.keys($scope.board);
    $scope.currPlayer = $scope.playerOne;
  }

  $scope.checkForWin = function() {
    var mark = $scope.currPlayer.mark;
    // switch out for better logic
    if (($scope.board['TL'].spot === mark && $scope.board['TM'].spot ===  mark && $scope.board['TR'].spot === mark)||
     ($scope.board['ML'].spot === mark && $scope.board['MM'].spot ===  mark && $scope.board['MR'].spot === mark)||
     ($scope.board['BL'].spot === mark && $scope.board['BM'].spot ===  mark && $scope.board['BR'].spot === mark)||
     ($scope.board['TL'].spot === mark && $scope.board['ML'].spot ===  mark && $scope.board['BL'].spot === mark)||
     ($scope.board['TM'].spot === mark && $scope.board['MM'].spot ===  mark && $scope.board['BM'].spot === mark)||
     ($scope.board['TR'].spot === mark && $scope.board['MR'].spot ===  mark && $scope.board['BR'].spot === mark)||
     ($scope.board['TL'].spot === mark && $scope.board['MM'].spot ===  mark && $scope.board['BR'].spot === mark)||
     ($scope.board['BL'].spot === mark && $scope.board['MM'].spot ===  mark && $scope.board['TR'].spot === mark)) 
    {
      $scope.handleWin();
    } else if ($scope.playsMade === 9) {
      $scope.handleTie();
    } else {
      $scope.changePlayer();
    }
  }

  $scope.handleWin = function() {
    $scope.playerOne.gamesPlayed++;
    if ($scope.currPlayer === $scope.playerOne) {
      $scope.playerOne.wins++;
    }
    setTimeout(function(){
      var resp = confirm($scope.currPlayer.name + ' has won the game! Click "OK" to play again.');
    if (resp) {
      $scope.initGame();
    }
    $scope.$apply();
    },1);
    
  }

  $scope.handleTie = function() {
    $scope.playerOne.gamesPlayed++;
    setTimeout(function(){
      var resp = confirm('Tie Game. Click "OK" to play again');
    if (resp) {
      $scope.initGame();
    }
    $scope.$apply();
    },1);

  }

  $scope.initGame();
});

