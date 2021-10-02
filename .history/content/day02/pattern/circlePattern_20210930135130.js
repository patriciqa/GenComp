
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
  createCanvas(400,400);
  frameRate(5)
  purpleButton = createButton('Purple');
  purpleButton.position(100, 410);
  purpleButton.mousePressed(changeToPurple()); 

  
  greenButton = createButton('Green');
  greenButton.position(100, 410);
  greenButton.mousePressed(changetoGreen()); 

  colorButton = createButton('Colorful');
  colorButton.position(250, 410);
  colorButton.mousePressed(changetoColor);
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
function changetoGreen(colour) {
    color = CSS_COLOR_GREEN;
}

function changetoColor() {
  color = CSS_COLOR_COLORFUL;
}
function changetoPurple() {
  color = CSS_COLOR_PURPLE;
}