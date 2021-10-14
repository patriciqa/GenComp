
let CSS_COLOR_PURPLE = ['#2d00f7ff', '#6a00f4ff', '#a100f2ff', '#b100e8ff', '#bc00ddff', ' #d100d1ff', '#db00b6ff', '#e500a4ff', '#f20089ff'];
let CSS_COLOR_GREEN = ["#dad7cd", "#a3b18a", "#588157", "#3a5a40", "#344e41"];
let CSS_COLOR_COLORFUL = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
let CSS_COLOR_RED = ["#283d3b", "#197278", "#edddd4", "#c44536", "#772e25"]
let CSS_COLOR_PINK = ["#d8e2dc", "#ffe5d9", "#ffcad4", "#f4acb7", "#9d8189"]


let counter = 0
let color = CSS_COLOR_PURPLE;

function setup() {
  createCanvas(400, 400);
  frameRate(5)

  greenButton = createButton('Green');
  greenButton.position(0, 410);
  greenButton.mousePressed(changetoGreen);

  colorButton = createButton('Colorful');
  colorButton.position(80, 410);
  colorButton.mousePressed(changetoColor);

  purpleButton = createButton('Purple');
  purpleButton.position(160, 410);
  purpleButton.mousePressed(changetoPurple);

  redButton = createButton('Red');
  redButton.position(240, 410);
  redButton.mousePressed(changetoRed);

  pinkButton = createButton('Pink');
  pinkButton.position(300, 410);
  pinkButton.mousePressed(changetoPink);
}

function draw() {
  background('black');
  for (let x = 10; x < width; x += 10) {
    for (let y = 10; y < height; y += 10) {
      stroke(0);
      let randomColor = color[Math.floor(Math.random() * color.length)];
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

function changetoRed() {
  color = CSS_COLOR_RED;
}

function changetoPink() {
  color = CSS_COLOR_PINK;
}

