let trails = []
function setup() { createCanvas(600, 600);
}
function draw() { background (100);
trails.push(createVector (mouseX, mouseY))
if (trails.length > 100){
trails.shift()
}
                 //tail
for (let i = 0; i < trails.length; i++){
let pos=trails[i]
ellipse (pos.x, pos.y,i/2 )
}
}

