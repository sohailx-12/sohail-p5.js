let img, maskImage;

function preload() {
  img = loadImage('Edited.jpg'); 
  maskImage = loadImage('star.png'); 
}
// attached images

function setup() {
  createCanvas(400, 400); 
  noLoop(); 
}
//creating a perfect size canvas

function draw() {
  background(0, 50, 100); 
  img.mask(maskImage);
  image(img, 0, 0, width, height); 
}
// adjusting width and height
