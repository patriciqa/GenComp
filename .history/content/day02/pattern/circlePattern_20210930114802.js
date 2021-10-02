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
let CSS_COLOR_PURPLE = [
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
let CSS_COLOR_GREEN = [
  'green'
]

let counter = 0
let color = CSS_COLOR_PURPLE;
function setup() {
  createCanvas(400, 400);
  stroke(0)
  frameRate(5)
  button = createButton('Green');
  button.position(0, 0);
  if(button.mousePressed) {
    color == CSS_COLOR_GREEN;
  }

}

function draw() {
  background('black');
  for (let x = 10; x < width; x += 10) {
    for (let y = 10; y < height; y += 10) {
      stroke(0);
      let randomColor = color[Math.floor(Math.random()*color.length)];
      fill(randomColor);

      ellipse(x, y, 10, 10);
      counter++;
    }
  }


}