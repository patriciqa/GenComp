let counter = 0
function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
  colorMode(HSB, 100);
  noLoop();
}

function draw() {
  background(220);
  
  for(let x = 100; x < width; x+= 100){
    for(let y = 100; y < height; y+= 100){
  		
      fill(counter, 100, 100);
      ellipse(x, y, 20, 20);
      counter++;
    }
  }
}