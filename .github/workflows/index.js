const board = [null, null, null, null, null, null, null, null, null];
let currentPlayer = "X";

function makeMove(cellIndex) {
  if (board[cellIndex] === null) {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName("cell")[cellIndex].innerText =
      currentPlayer;
    if (checkWin()) {
      setTimeout(() => {
        alert(`Player ${currentPlayer} wins!`);
        resetBoard();
      }, 100);
    } else if (board.every((cell) => cell !== null)) {
      setTimeout(() => {
        alert("It's a tie!");
        resetBoard();
      }, 100);
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  return winPatterns.some((pattern) =>
    pattern.every((cellIndex) => board[cellIndex] === currentPlayer)
  );
}

function resetBoard() {
  board.fill(null);
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerText = ""));
  currentPlayer = "X";
}
