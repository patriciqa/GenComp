function setup() {
  createCanvas(400, 400);
  background(0);
}


function draw() {
  spiraleArchimedsch(1, 1, 2000);
}

function spiraleArchimedsch(radius, distance, size) {
  stroke(255);
  for (i = 0; i < size; i++) {
    angle = 0.1 * i;
    let x = 200 + (radius + distance * angle) * Math.cos(angle);
    let y = 200 + (radius + distance * angle) * Math.sin(angle);
    point(x, y);
  }
}


