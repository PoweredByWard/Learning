const CANVAS_HEIGHT = 500
const CANVAS_WIDTH = 500

const AMOUNT_BALLS = 200

let ballen = []

function setup() {
  createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT)
  for(var i = 0;i<AMOUNT_BALLS;i++){
    ballen[i] = createCreature()
  } 
}

function draw() {
  background(200)
  for(var i = 0;i<AMOUNT_BALLS;i++){
    handleCollisionCreature(ballen[i])
    drawCreature(ballen[i])
    movecreature(ballen[i])
  }
}

function drawCreature(creature){
  fill(creature.color)
  noStroke()
  ellipse(creature.x,creature.y,creature.diameter)
}

function movecreature(creature){
  const RANDOM_JUMP = Math.round(Math.random()*creature.chanceJump)
  if(RANDOM_JUMP==0) jump(creature)
  creature.x = creature.x+creature.speedX
  creature.y = creature.y+creature.speedY
}

function createCreature(){
  const SPEED_X = randomSpeed()
  const SPEED_Y = randomSpeed()
  let creature = {
    x:Math.random()*CANVAS_HEIGHT-35,
    y:Math.random()*CANVAS_WIDTH-35,
    diameter:Math.random()*30+5,
    speedX:SPEED_X,
    speedY:SPEED_Y,
    chanceJump:Math.round(Math.random()*200),
    color:color(Math.random()*255,Math.random()*255,Math.random()*255)
  }
  return creature
}

function handleCollisionCreature(creature){
  const RADIUS = creature.diameter / 2
  const CREATURE_COL_TOP = RADIUS > creature.y
  const CREATURE_COL_BOTTOM = CANVAS_HEIGHT - RADIUS < creature.y
  const CREATURE_COL_LEFT = RADIUS > creature.x
  const CREATURE_COL_RIGHT = CANVAS_WIDTH - RADIUS < creature.x
  
  if(CREATURE_COL_TOP){
    creature.y = RADIUS
    changeDir(creature)
  }
  if(CREATURE_COL_BOTTOM){
    creature.y = CANVAS_HEIGHT - RADIUS
    changeDir(creature)
  }
  if(CREATURE_COL_LEFT){
    creature.x = RADIUS
    changeDir(creature)
  }
  if(CREATURE_COL_RIGHT){
    creature.x = CANVAS_WIDTH - RADIUS
    changeDir(creature)
  }
  
}

function changeDir(creature){
  creature.speedX *=randomDir()
  creature.speedY *=randomDir()
}

function randomDir(){
  const RANDOM = Math.random()*2-1
  return RANDOM>0?1:-1
}

function jump(creature){
  creature.speedX = randomSpeed()
  creature.speedX = randomSpeed()
  changeDir(creature)
}

function randomSpeed(){
  return (Math.random()*1.5+0.5) * randomDir()
}