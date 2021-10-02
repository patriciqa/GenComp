function setup() {
  createCanvas(400, 400);
  c1 = color('pink');
  c2 = color(28, 24, 27);
  setGradient(c1, c2);
}

function draw() {

  for (let i = 0; i < 10; i++) {
    fill('black')
    ellipse(56 * i, 46, 33, 33);
    line(50 * i, 200, 60, 100);
    rect(70 * i, 250, 20, 20);
    ellipse(80 * i, 350, 20, 40);

  }
}

function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}
