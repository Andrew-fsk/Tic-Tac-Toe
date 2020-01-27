function isWin(board) {
  for (let i = 0; i < 9; i++) {
    if (board[i] == "X") {
      if (board[i] == board[i + 4] && board[i] == board[i + 8]) {
        return "X";
      }
      if (board[i] == board[i + 1] && board[i] == board[i + 2]) {
        return "X";
      }
      if (board[i] == board[i + 3] && board[i] == board[i + 6]) {
        return "X";
      }
      if (board[i] == board[i + 2] && board[i] == board[i + 4]) {
        return "X";
      }
    }
    if (board[i] == "O") {
      if (board[i] == board[i + 4] && board[i] == board[i + 8]) {
        return "O";
      }
      if (board[i] == board[i + 1] && board[i] == board[i + 2]) {
        return "O";
      }
      if (board[i] == board[i + 3] && board[i] == board[i + 6]) {
        return "O";
      }
      if (board[i] == board[i + 2] && board[i] == board[i + 4]) {
        return "O";
      }
    }
  }
}

function check() {
  let table = document.querySelectorAll(".cell");
  let arr = [].slice.call(table);

  arr = arr.map(item => item.textContent);
  if (isWin(arr) == "O") {
    document.querySelector(".winner").innerHTML = "O is WIN!!!";
  } else if (isWin(arr) == "X") {
    document.querySelector(".winner").innerHTML = "X is WIN!!!";
  } else if (isWin(arr) == "draw") {
    document.querySelector(".winner").innerHTML = "DRAW!!!";
  }
}

let choise = "X";

function input(id) {
  document.getElementById(id).textContent = choise;
  if (choise == "X") {
    choise = "O";
  } else {
    choise = "X";
  }
}

window.onclick = function (e) {
  let elem = e ? e.target : window.event.srcElement;
  if (elem.id) {
    let cell = document.getElementById(elem.id).textContent;
    if (elem.id && !cell) {
      this.input(elem.id);
      this.check();
    }
  } else {
    let table = document.querySelectorAll(".cell");
    for (let cell of table) {
      cell.innerHTML = "";
    }
    document.querySelector(".winner").innerHTML = "Who will win?";
  }
};
