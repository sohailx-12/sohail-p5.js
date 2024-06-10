var particles_a = [];
var particles_b = [];
var particles_c = [];
var nums =200;
var noiseScale = 800;

function preload(){}

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255, 255, 255);
	width = 1000;
	height = 700;
	for(var i = 0; i < nums; i++){
		particles_a[i] = new Particle(random(0, width),random(0,height));
		particles_b[i] = new Particle(random(0, width),random(0,height));
		particles_c[i] = new Particle(random(0, width),random(0,height));
	}
	
}

function draw(){
	smooth();
	noStroke();
	
		for(var i = 0; i < nums; i++){
		var radius = map(i,0,nums,1,2);
		var alpha = map(i,0,nums,0,250);

		fill(240,200,60,alpha);
		particles_a[i].move();
		particles_a[i].display(radius);
		particles_a[i].checkEdge();

		fill(160,100,200,alpha);
		particles_b[i].move();
		particles_b[i].display(radius);
		particles_b[i].checkEdge();

		fill(130,70,90,alpha);
		particles_c[i].move();
		particles_c[i].display(radius);
		particles_c[i].checkEdge();
		} 
}
// mouse interaction by the user
function mousePressed() {
	fill(0);
	strokeWeight(5);
	textFont();
  textSize(100);
  textAlign(CENTER, CENTER);
	stroke(0);
	text('Interactive Art', 7, 0, windowWidth, windowHeight);
	fill(0, 130, 145);
	text('Interactive Art', 0, 0, windowWidth, windowHeight);
  loop();
}

function Particle(x, y){
	this.dir = createVector(0, 0);
	this.vel = createVector(0, 0);
	this.pos = createVector(x, y);
	this.speed = 0.4;

	this.move = function(){
		var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
	}

	this.checkEdge = function(){
		if(this.pos.x > windowWidth || this.pos.x < 0 || this.pos.y > windowHeight || this.pos.y < 0){
			this.pos.x = random(30, windowWidth);
			this.pos.y = random(30, windowHeight);
		}
	}
	// randamizing to make a cricle
	this.display = function(r){
		ellipse(this.pos.x, this.pos.y, r, r);
      
	}
}

