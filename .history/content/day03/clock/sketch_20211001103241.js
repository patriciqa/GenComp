function setup() {
  createCanvas(400, 400);
}

function draw() {
  spiraleArchimedsch(1, 1, 2000);
}

function spiraleArchimedsch(middle, distance) {
  stroke(255);
  for (i = 0; i < 720; i++) {
    angle = 0.1 * i;
    let x = 200 + (middle + distance * angle) * Math.cos(angle);
    let y = 200 + (middle + distance * angle) * Math.sin(angle);
    point(x, y);
  }
}