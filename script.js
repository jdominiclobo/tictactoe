// alert("Welcome to TicTacToe");

//Initial turn
let turn = "X";
let gameOver = false;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Function to check for win
const checkWin = () => {
  let tileTexts = document.getElementsByClassName("tileText");
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

  wins.forEach((e) => {
    if (
      tileTexts[e[0]].innerText === tileTexts[e[1]].innerText &&
      tileTexts[e[2]].innerText === tileTexts[e[1]].innerText &&
      tileTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".display").innerText =
        tileTexts[e[0]].innerText + " won";
      gameOver = true;
    }
  });
};

//Game logic
let tiles = document.getElementsByClassName("tile");
Array.from(tiles).forEach((element) => {
  let tileText = element.querySelector(".tileText");
  element.addEventListener("click", (e) => {
    if (tileText.innerText === "") {
      console.log("clickedy clicks");
      tileText.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("display")[0].innerText =
          "Player " + turn + "'s turn";
      }
    }
  });
});

// Handling reset
reset.addEventListener("click", () => {
  let tileTexts = document.querySelectorAll(".tileText");
  Array.from(tileTexts).forEach((ele) => {
    ele.innerText = "";
  });
  turn = "X";
  gameOver = false;
  document.getElementsByClassName("display")[0].innerText =
    "Player " + turn + "'s turn";
});
