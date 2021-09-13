let board = [];
let playerColors = [];
let playerScores = [];

let mouseIn = false;
let mouseCol = null;

let playerTurn = 1;

let playerTurnUi;

const canvasWidth = boardSizeX * tileSize + whiteSpace * (boardSizeX + 1);
const canvasHeight =
  boardSizeY * tileSize + whiteSpace * (boardSizeY + 1) + offsetTop;
