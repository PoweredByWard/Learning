function setup() {
  setupPlayers();
  fillBoard();
  setupCanvas();
}

function draw() {
  background(207, 196, 255);
  drawUi();
  drawBoard();
  updateMouseCol()
}


