
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
let CSS_COLOR_GREEN = ["#dad7cd","#a3b18a","#588157","#3a5a40","#344e41"];
let CSS_COLOR_COLORFUL = ["#ef476f","#ffd166","#06d6a0","#118ab2","#073b4c"];

let counter = 0
let color = CSS_COLOR_PURPLE;
function setup() {
  createCanvas(height, height);
  frameRate(5)
  greenButton = createButton('Green');
  greenButton.position(100, 410);
  greenButton.mousePressed(changeColor('green')); 
  colorButton = createButton('Colorful');
  colorButton.position(250, 410);
  colorButton.mousePressed(changeColor('colorful'));
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
function changeColor(color) {
  if(color = 'green') {
    color = CSS_COLOR_GREEN;
  } else if (color='colorful') {
    color = CSS_COLOR_COLORFUL;

  }
}