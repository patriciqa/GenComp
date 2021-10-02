// /* CSS HEX */
// --blue: #2d00f7ff;
// --electric-indigo: #6a00f4ff;
// --electric-violet: #8900f2ff;
// --purple-x-11: #a100f2ff;
// --purple-x-11-2: #b100e8ff;
// --electric-purple: #bc00ddff;
// --steel-pink: #d100d1ff;
// --steel-pink-2: #db00b6ff;
// --fashion-fuchsia: #e500a4ff;
// --magenta-process: #f20089ff;

let counter = 0
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100);
  noLoop();
}

function draw() {
  background('grey');
  
  for(let x = 10; x < width; x+= 10){
    for(let y = 10; y < height; y+= 10){
  		stroke(0)
      // fill(random(1, 100), 100, 100);
      fill('#f20089ff');

      ellipse(x, y, 5, 5);
      counter++;
    }
  }
}