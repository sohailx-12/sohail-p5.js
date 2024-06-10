function setup() {
  createCanvas(400, 400);
} 

function draw() {
// translate it on to the page
  translate(width/2, height/2);
  
  // This is the code for face
  fill(60, 0, 35);
  ellipse(0,-120,100,60);
  ellipse(0, 0, 200, 200);
//this the code for eyes
  fill(60,300,35);
  ellipse(-25,-140,20,20);
  ellipse(25,-140,20,20);
  //this is the code for mouth
  noFill();
  stroke(100);
  strokeWeight(8);
  beginShape();
  vertex(-20,-110);
  bezierVertex(-10,-110,10,-110,20,-110);
  endShape();

  
  
  
  
}
