
var img, x, y;

function preload() {

img = loadImage("nature.jpg");

}



function setup() {

createCanvas (400, 400);

background(0);

noStroke();

}



function draw() {

x = random(width);

y = random(height);

var c = img.get(x, y);

fill(c[3], c[2], c[2], 50);

rect (x, y, 30, 30);

}
