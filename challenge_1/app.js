var turn = 'X';
var boardArr = ['', '', '', '', '', '', '', '', ''];
var winVals = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var winRecord = {p1: 0, p2: 0, tie: 0};
newWinRecord();

function newWinRecord() {
  document.getElementById("record").textContent = "P1: " + winRecord.p1 + " P2: " + winRecord.p2 + " Tie: " + winRecord.tie;
}

function modifyBox(box, boxNum) {
  if (box.firstChild.nodeValue === ' ') {
    box.innerHTML = turn;
    boardArr[boxNum-1] = turn;
    turn = (turn === 'X')? 'O' : 'X';
  }
  for (var i = 0; i < winVals.length; i++) {
    var caseArr = winVals[i];
    if ((boardArr[caseArr[0]] === boardArr[caseArr[1]]) && (boardArr[caseArr[1]] === boardArr[caseArr[2]])) {
      if (boardArr[caseArr[0]] === 'X') {
        setTimeout(function(){whoWins('X')}, 50);
        return;
      } else if (boardArr[caseArr[0]] === 'O') {
        setTimeout(function(){whoWins('O')}, 50);
        return;
      }
    }
  }

  var allFilled = true;
  for (var i = 0; i < boardArr.length; i++) {
    if (boardArr[i].length === 0) {
      allFilled = false;
    }
  }
  if (allFilled) {
    setTimeout(function(){whoWins('tie')}, 50);
  }
}

function whoWins(player) {
  if (player === 'X') {
    if (confirm('Player 1 wins! Play again?')) {
      boardArr = ['', '', '', '', '', '', '', '', ''];
      winRecord.p1 = winRecord.p1 + 1;
      document.querySelectorAll('.box').forEach(item => {
        item.textContent = ' ';
      });
      newWinRecord();
      turn = 'X';
    } else {
      newWinRecord();
      return;
    }
  } else if (player === 'O') {
    if (confirm('Player 2 wins! Play again?')) {
      boardArr = ['', '', '', '', '', '', '', '', ''];
      winRecord.p2 = winRecord.p2 + 1;
      document.querySelectorAll('.box').forEach(item => {
        item.textContent = ' ';
      });
      newWinRecord();
      turn = 'O';
    } else {
      newWinRecord();
      return;
    }
  } else if (player === 'tie') {
    if (confirm('Tie! Play again?')) {
      boardArr = ['', '', '', '', '', '', '', '', ''];
      winRecord.tie = winRecord.tie + 1;
      document.querySelectorAll('.box').forEach(item => {
        item.textContent = ' ';
      });
      newWinRecord();
    } else {
      newWinRecord();
      return;
    }
  }
}

document.querySelectorAll('.box').forEach(item => {
  item.addEventListener("click", function(){
    modifyBox(item, parseInt(item.id[3]));
  })
});