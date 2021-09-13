function checkMove(col, row) {
  //Checks for paterns from placed tile
  checkHorizontal(col, row);
  checkVertical(col, row);
  checkDiagonal(col, row);
}

function checkVertical(col, row) {
  for (var i = 0; i < 4; i++) {
    let outOfRange = false;
    const playerTiles = [];
    for (var tile = 0; tile < 4; tile++) {
      if (row - i + tile < 0 || row - i + tile >= boardSizeY) {
        outOfRange = true;
        break;
      }
      playerTiles.push(board[col][row - i + tile]);
    }
    if (!outOfRange) {
      let isAllPlayer = true;
      for (tile in playerTiles) {
        if (playerTiles[tile].player != playerTurn) {
          isAllPlayer = false;
          break;
        }
      }
      if (isAllPlayer) {
        checkScore(playerTiles);
      }
    }
  }
}

function checkHorizontal(col, row) {
  for (var i = 0; i < 4; i++) {
    let outOfRange = false;
    const playerTiles = [];
    for (var tile = 0; tile < 4; tile++) {
      if (col - i + tile < 0 || col - i + tile >= boardSizeX) {
        outOfRange = true;
        break;
      }
      playerTiles.push(board[col - i + tile][row]);
    }
    if (!outOfRange) {
      let isAllPlayer = true;
      for (tile in playerTiles) {
        if (playerTiles[tile].player != playerTurn) {
          isAllPlayer = false;
          break;
        }
      }
      if (isAllPlayer) {
        checkScore(playerTiles);
      }
    }
  }
}

function checkDiagonal(col, row) {
  checkDiagonalUp(col, row);
  checkDiagonalDown(col, row);
}

function checkDiagonalDown(col, row) {
  for (var i = 0; i < 4; i++) {
    let outOfRange = false;
    const playerTiles = [];
    for (var tile = 0; tile < 4; tile++) {
      let outOfRangeRow = row - i + tile < 0 || row - i + tile >= boardSizeY;
      let outOfRangeCol = col + i - tile < 0 || col + i - tile >= boardSizeX;
      if (outOfRangeRow || outOfRangeCol) {
        outOfRange = true;
        break;
      }
      playerTiles.push(board[col + i - tile][row - i + tile]);
    }
    if (!outOfRange) {
      let isAllPlayer = true;
      for (tile in playerTiles) {
        if (playerTiles[tile].player != playerTurn) {
          isAllPlayer = false;
          break;
        }
      }
      if (isAllPlayer) {
        checkScore(playerTiles);
      }
    }
  }
}

function checkDiagonalUp(col, row) {
  for (var i = 0; i < 4; i++) {
    let outOfRange = false;
    const playerTiles = [];
    for (var tile = 0; tile < 4; tile++) {
      let outOfRangeRow = row + i - tile < 0 || row + i - tile >= boardSizeY;
      let outOfRangeCol = col + i - tile < 0 || col + i - tile >= boardSizeX;
      if (outOfRangeRow || outOfRangeCol) {
        outOfRange = true;
        break;
      }
      playerTiles.push(board[col + i - tile][row + i - tile]);
    }
    if (!outOfRange) {
      let isAllPlayer = true;
      for (tile in playerTiles) {
        if (playerTiles[tile].player != playerTurn) {
          isAllPlayer = false;
          break;
        }
      }
      if (isAllPlayer) {
        checkScore(playerTiles);
      }
    }
  }
}

function checkScore(playerTiles) {
  const allScores = [];
  let alreadyUsed = false;
  for (tile in playerTiles) {
    for (score in playerTiles[tile]) {
      if (!allScores.includes(playerTiles[tile][score])) allScores.push(score);
    }
  }
  for (tile in playerTiles) {
    for (score in playerTiles[tile]) {
      if (!allScores.includes(playerTiles[tile][score])) alreadyUsed = false;
    }
  }
  if (!alreadyUsed) {
    let scoreId = 0;
    playerScores.forEach((playerScore) => {
      scoreId += playerScore;
    });
    for (tile in playerTiles) {
      playerTiles[tile].scores.push(scoreId);
    }
    playerScores[playerTurn - 1] += 1;
  }
}
