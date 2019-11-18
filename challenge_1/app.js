var turn = 'X';
var boardArr = ['', '', '', '', '', '', '', '', ''];
var winVals = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var turnCount = 0;

function modifyBox(box, boxNum) {
  if (box.firstChild.nodeValue === ' ') {
    box.innerHTML = turn;
    boardArr[boxNum-1] = turn;
    turnCount++;
    console.log(turnCount);
    turn = (turn === 'X')? 'O' : 'X';
  }
  for (var i = 0; i < winVals.length; i++) {
    var caseArr = winVals[i];
    if ( (boardArr[caseArr[0]] === boardArr[caseArr[1]]) && (boardArr[caseArr[1]] === boardArr[caseArr[2]]) ) {
      if (boardArr[caseArr[0]] === 'X') {
        setTimeout(function(){whoWins('X')}, 0);
      } else if (boardArr[caseArr[0]] === 'O') {
        setTimeout(function(){whoWins('O')}, 0);
      }
    }
  }
  if (turnCount === 9) {
    setTimeout(function(){whoWins('tie')}, 0);
  }
}

function whoWins(player) {
  if (player === 'X') {
    if (confirm('Player 1 wins! Play again?')) {
      location.reload();
    } else {
      return;
    }
  } else if (player === 'O') {
    if (confirm('Player 2 wins! Play again?')) {
      location.reload();
    } else {
      return;
    }
  } else if (player === 'tie') {
    if (confirm('Tie! Play again?')) {
      location.reload();
    } else {
      return;
    }
  }
}

var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");
var b4 = document.getElementById("box4");
var b5 = document.getElementById("box5");
var b6 = document.getElementById("box6");
var b7 = document.getElementById("box7");
var b8 = document.getElementById("box8");
var b9 = document.getElementById("box9");

b1.addEventListener("click", function(){modifyBox(b1, 1)});
b2.addEventListener("click", function(){modifyBox(b2, 2)});
b3.addEventListener("click", function(){modifyBox(b3, 3)});
b4.addEventListener("click", function(){modifyBox(b4, 4)});
b5.addEventListener("click", function(){modifyBox(b5, 5)});
b6.addEventListener("click", function(){modifyBox(b6, 6)});
b7.addEventListener("click", function(){modifyBox(b7, 7)});
b8.addEventListener("click", function(){modifyBox(b8, 8)});
b9.addEventListener("click", function(){modifyBox(b9, 9)});