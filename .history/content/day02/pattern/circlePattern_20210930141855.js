
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
  c1 = color('pink');
  c2 = color(28, 24, 27);
  setGradient(c1, c2);
  
  greenButton = createButton('Green');
  greenButton.position(100, 410);
  greenButton.mousePressed(changetoGreen); 

  colorButton = createButton('Colorful');
  colorButton.position(200, 410);
  colorButton.mousePressed(changetoColor);

  purpleButton = createButton('Purple');
  purpleButton.position(0, 410);
  purpleButton.mousePressed(changetoPurple);
}

function draw() {
  for (let x = 10; x < width; x += 10) {
    for (let y = 10; y < height; y += 10) {
      stroke(0);
      let randomColor = color[Math.floor(Math.random()*color.length)];
      fill(randomColor);
      ellipse(x, y, 8, 8);
      counter++;
    }
  }
}
function changetoGreen() {
    color = CSS_COLOR_GREEN;
}
function changetoColor() {
  color = CSS_COLOR_COLORFUL;
}
function changetoPurple() {
  color = CSS_COLOR_PURPLE;
}

function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}