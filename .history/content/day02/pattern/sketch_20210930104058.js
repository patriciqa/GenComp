function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let x = 0; x < width; x += width/10) {
    for(let y = 0; y < height; x += height/5) {
      stroke(0);
      strokeWeight(0);
      circle(x, 0,x, height);
      circle(0, y, width, y);
    }
  }
}
