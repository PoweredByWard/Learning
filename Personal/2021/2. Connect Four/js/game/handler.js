function fillBoard() {
  for (let x = 0; x < boardSizeX; x++) {
    board[x] = [];
    for (let y = 0; y < boardSizeY; y++) {
      fillTile(x, y);
    }
  }
}

function updateMouseCol() {
  if (mouseIn) {
    mouseCol = getMouseCol();
  }
}

function switchTurn() {
  const isLastPlayerInRow = playerTurn == playerColors.length;
  if (isLastPlayerInRow) {
    playerTurn = 1;
  } else {
    playerTurn++;
  }
}

function setupPlayers() {
  // playerColors = [color(255, 94, 94), color(94, 94, 255), color(94, 255, 94)];
  for (player in players) {
    const red = players[player]["r"];
    const green = players[player]["g"];
    const blue = players[player]["b"];
    playerColors[player] = color(red, green, blue);
  }
  playerColors.forEach((color) => {
    playerScores.push(0);
  });
}

function setupCanvas() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.mouseOver(() => {
    mouseIn = true;
  });
  canvas.mouseOut(() => {
    mouseIn = false;
  });
  canvas.mouseClicked(handleClick);
}

function handleClick() {
  const col = getMouseCol();
  const colRowsSize = getColumnSize(col);
  if (colRowsSize == boardSizeY) return;
  board[col][colRowsSize].player = playerTurn;
  checkMove(col, colRowsSize);
  switchTurn();
}

function getColumnSize(col) {
  for (let row = 0; row < boardSizeY; row++) {
    if (!board[col][row].player) return row;
  }
  return boardSizeY;
}

function getMouseCol() {
  const colWidth = tileSize + whiteSpace;
  for (let col = 0; col < boardSizeX; col++) {
    const colStart = colWidth * col + whiteSpace / 2;
    const colEnd = colWidth * (col + 1) + whiteSpace / 2;

    mouseInColumn = mouseX > colStart && mouseX < colEnd;
    if (mouseInColumn) {
      return col;
    }
  }
  return null;
}
