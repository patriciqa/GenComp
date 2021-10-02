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
const CSS_COLOR_NAMES = [
  '#2d00f7ff',
  '#6a00f4ff',
  '#a100f2ff',
  '#b100e8ff',
  '#bc00ddff',
  ' #d100d1ff',
  '#db00b6ff',
  '#e500a4ff',
  '#f20089ff'
];

let counter = 0
function setup() {
  createCanvas(400, 400);
  stroke(0)
  noLoop();
}

function draw() {
  background('grey');
  let randomColor = CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];

  for (let x = 10; x < width; x += 10) {
    for (let y = 10; y < height; y += 10) {
      stroke(0);
      fill(randomColor);

      ellipse(x, y, 5, 5);
      counter++;
    }
  }
}