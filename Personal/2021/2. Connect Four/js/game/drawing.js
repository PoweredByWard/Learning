function drawUi() {
  const centerOffset = offsetTop / 2;
  const textTopOffset = 10;

  drawTurn(centerOffset, textTopOffset);
  drawScore(centerOffset, textTopOffset);
}

function drawTurn(centerOffset, textTopOffset) {
  fill(color(playerColors[playerTurn - 1]));
  noStroke();
  ellipse(25, centerOffset, 30);

  textSize(28);
  fill(50);
  text(`'s turn`, 42, centerOffset + textTopOffset);
  textAlign("right");
}

function drawScore(centerOffset, textTopOffset) {
  let extraLenght = 0;
  for (let player = 0; player < playerScores.length; player++) {
    const ellipseSize = 30;
    const uiOffsetRight = 40;
    const canvasRight = canvasWidth - uiOffsetRight;
    const textLength = playerScores[player].toString().length;
    extraLenght += textLength * 10;
    const ellipsePosY =
      canvasRight - player * 60 - textLength * 10 - extraLenght;
    fill(color(playerColors[playerScores.length - (player + 1)]));
    noStroke();
    ellipse(ellipsePosY, centerOffset, ellipseSize);

    const rightOffset = player != 0 ? 20 : textLength * 15 + 20;
    fill(50);
    text(
      playerScores[playerScores.length - (player + 1)],
      ellipsePosY + rightOffset,
      centerOffset + textTopOffset
    );
    textAlign("left");
  }
}

function drawBoard() {
  for (let x = 0; x < boardSizeX; x++) {
    for (let y = 0; y < boardSizeY; y++) {
      drawTile(board[x][y], x);
    }
  }
}
