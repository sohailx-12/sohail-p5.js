let img, textMask;

function preload() {
  img = loadImage('Edited.jpg');
}

function setup() {
  createCanvas(400, 400); 
// adding textmask=graphics so that text is displayed
  textMask = createGraphics(400, 400);
  textMask.fill(25); 
  textMask.textSize(200);
  textMask.textAlign(CENTER, CENTER);
  // text is written here
  textMask.text('hi', 200, 200);
  img.mask(textMask);
  noLoop();
}
function draw() {
  background(0, 50, 100); 
  image(img, 0, 0, width, height); 
}
