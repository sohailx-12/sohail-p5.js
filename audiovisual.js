function preload() {
  mySound = loadSound('audio.mp3');
}
// pre loads the music
let mic; 
let colours = [ 
  "#5645110",
  "#e07899",
  "#ffffff",
  "#096542",
  "#c14141"
]
// colors added to the circles

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  mic = new p5.AudioIn();
  mic.start();
  mySound.setVolume(1);
  mySound.play();
  mySound.loop();
}
//background and muisc autoplay and loop


function draw() {
	
	let micLevel = mic.getLevel() * height * 3; 
	fill(random(colours));
	circle(mouseX, mouseY, micLevel); 
}
//mouse interaction
