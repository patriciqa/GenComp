function setup() {
  createCanvas(400, 400, WEBGL);
}
function draw() {
  background(0);
  noStroke();
  ambientLight(0);
  emissiveMaterial(130, 230, 0);
  sphere(40);
  textAlign(RIGHT);
  drawWords(width * 0.25);

}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  text('ichi', x, 80);

  fill(65);
  text('ni', x, 150);

  fill(190);
  text('san', x, 220);

  fill(255);
  text('shi', x, 290);
}