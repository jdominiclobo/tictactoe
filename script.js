//Initial turn
let turn = "X";
let gameOver = false;
let checkCount = 0;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Winning conditions
let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let tileTexts = document.getElementsByClassName("tileText");

// Function to check for win
const checkWin = () => {
  let message = "";
  wins.forEach((e) => {
    if (
      tileTexts[e[0]].innerText === tileTexts[e[1]].innerText &&
      tileTexts[e[2]].innerText === tileTexts[e[1]].innerText &&
      tileTexts[e[0]].innerText !== ""
    ) {
      message = tileTexts[e[0]].innerText;
      gameOver = true;
      checkCount = 0;
    }
    if (gameOver) {
      document.querySelector(".display").innerText = message + " won";
      swal(`Player ${message} won`);
      checkCount = 0;
      setTimeout(() => {
        clearTiles();
      }, 2000);
    } else if (checkCount === 9) {
      document.querySelector(".display").innerText = "Draw";
      swal("It's a draw");
      setTimeout(() => {
        checkCount = 0;
        clearTiles();
      }, 1000);
    }
  });
};

// Clear tiles once won
const clearTiles = () => {
  let tileTexts = document.querySelectorAll(".tileText");
  Array.from(tileTexts).forEach((ele) => {
    ele.innerText = "";
  });
  turn = "X";
  gameOver = false;
  document.getElementsByClassName("display")[0].innerText =
    "Player " + turn + "'s turn";
};

//Game logic
let tiles = document.getElementsByClassName("tile");

for (let i = 0; i < tiles.length; i++) {
  let tileText = tiles[i].querySelector(".tileText");
  tiles[i].addEventListener("click", (e) => {
    if (tileText.innerText === "") {
      tileText.innerText = turn;
      checkCount++;
      turn = changeTurn();
      // setTimeout(() => {
      checkWin();
      // }, 500);

      if (!gameOver) {
        document.getElementsByClassName("display")[0].innerText =
          "Player " + turn + "'s turn";
      }
    }
  });
}

// Handling reset
reset.addEventListener("click", () => {
  clearTiles();
});
