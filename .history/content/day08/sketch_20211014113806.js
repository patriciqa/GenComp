function setup() {
  createCanvas(400, 400);
}

let angle;
let c = 1;

function draw() {
  background(220);
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(mouseX, mouseY);
    rotate(radians(angle));
    stroke(c);
    line(0, 0, lineLength, 0);
    pop();

    angle += angleSpeed;
  }
}

function mousePressed() {
  lineLength = random(70, 200);
}
