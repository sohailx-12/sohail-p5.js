var screen = 0;
var y = -20;
var x = 200;
var speed = 2;
var score = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameOn();
  } else if (screen == 2) {
    endScreen();
  }
}
// screen 0
function startScreen() {
  background(96, 157, 255);
  fill(243, 0, 0); 
  textAlign(CENTER);
  text('CATCHING THE BALLS', width / 6, height / 8);
  text('click to start', width / 6, height / 8 + 20);
  reset();
}
// screen 1
function gameOn() {
  background(32, 15, 43);
  fill(255, 0, 0); 
  text("score = " + score, 30, 20);
  fill(255); 
  rect(x, y, 20, 20);
  rectMode(CENTER);
  rect(mouseX, height - 10, 50, 30);
  y += speed;
  if (y > height) {
    screen = 2;
  }
  if (y > height - 10 && x > mouseX - 20 && x < mouseX + 20) {
    y = -20;
    speed += 0.5;
    score += 1;
  }
  if (y == -20) {
    pickRandom();
  }
}

function pickRandom() {
  x = random(20, width - 20);
}

//end screen
function endScreen() {
  background(0);
  textAlign(LEFT);
  text('GAME OVER', width / 2, height / 2);
  text("YOUR SCORE = " + score, width / 2, height / 2 + 20);
  text('click to play again', width / 2, height / 2 + 40);
}

function mousePressed() {
  if (screen == 0) {
    screen = 1;
  } else if (screen == 2) {
    screen = 0;
  }
}

function reset() {
  score = 0;
  speed = 3;
  y = -20;
}
