class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.player = null;
    this.scores = [];
  }
}

function fillTile(x, y) {
  const tileContainerSize = tileSize + whiteSpace;
  const offset = tileSize / 2 + whiteSpace;
  const tileX = tileContainerSize * x + offset;
  const tileY = tileContainerSize * (boardSizeY - y - 1) + offset + offsetTop;
  board[x][y] = new Tile(tileX, tileY);
}

function drawTile(tile, column) {
  if (tile.player) {
    const playerColor = playerColors[tile.player - 1];
    fill(color(playerColor));
  } else {
    if (mouseCol == column) {
      fill(230);
    } else {
      fill(220);
    }
  }
  noStroke();
  ellipse(tile.x, tile.y, tileSize);
}
