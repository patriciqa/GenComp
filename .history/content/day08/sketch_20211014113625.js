function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(mouseX, mouseY);
    rotate(radisna(angle));
    stroke(c);
    line(0, 0, lineLength, 0);
    pop();

    angle += angleSpeed;
  }
}

function mousePressed() {
  lineLength = random(70, 200);
}
