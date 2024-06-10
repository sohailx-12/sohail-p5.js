

function setup() {
  createCanvas(400, 400);
  
  translate(150, 200);
  background(0);
  // loop starts here
  for (var i = 0; i < 10; i += 1) {
    fill(36 * i, 100, 100);
    rect(width / 10 *i, 0, width / 10, height);
  }
  // partten added to the loop
  for (var x = 0; x <= width; x += 40) {
    for (var y = 0; y <= height; y += 40) {
      fill(200, 100, 100);
      ellipse(x, y, 40, 0);
    }
  }
}
