


let CSS_COLOR_PURPLE = ['#2d00f7ff', '#6a00f4ff', '#a100f2ff', '#b100e8ff', '#bc00ddff', ' #d100d1ff', '#db00b6ff', '#e500a4ff', '#f20089ff'];
let CSS_COLOR_GREEN = ["#dad7cd", "#a3b18a", "#588157", "#3a5a40", "#344e41"];
let CSS_COLOR_COLORFUL = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
let CSS_COLOR_RED = ["#283d3b", "#197278", "#edddd4", "#c44536", "#772e25"]
let CSS_COLOR_PINK = ["#d8e2dc", "#ffe5d9", "#ffcad4", "#f4acb7", "#9d8189"]


let color = CSS_COLOR_PURPLE;
let colors = new Array(CSS_COLOR_PURPLE, CSS_COLOR_GREEN, CSS_COLOR_COLORFUL, CSS_COLOR_RED, CSS_COLOR_PINK);
let counter = 0;
let stepSize;
let x = 0;
let y = 0;
let fontSizeMin = 0.001;
let letters = "digital Ideation";
let angleDistortion = 0;

function setup() {
  createCanvas(1000, 600);
  background('black');


  wordInputText = createElement('p', 'Word');
  wordInputText.position(10, 400);
  wordInput = createInput();
  wordInput.position(10, 450);

  // sizeInputText = createElement('p', 'Number');
  // sizeInputText.position(200, 400);
  // sizeInput = createInput();
  // sizeInput.position(200, 450);

  colorInputText = createElement('p', 'Color (0-4)');
  colorInputText.position(200, 400);
  colorInput = createInput();
  colorInput.position(200, 450);

  button = createButton('Create new scene');
  button.position(400, 450);
  button.mousePressed(redraw);

}

function draw() {
  if (wordInput.value() == "") {
    letters = "Digital Ideation";
  } else {
    letters = wordInput.value();
  }
  if (colorInput.value() == "0" || colorInput.value() == "1" || colorInput.value() == "2" || colorInput.value() == "3" || colorInput.value() == "4") {
    colorNumber = parseInt(colorInput.value());
  } else {
    colorNumber = 0;
  }
  color = colors[colorNumber]
  let randomColor = color[Math.floor(Math.random() * color.length)]; //random from color palette
  fill(randomColor);

  if (mouseIsPressed && mouseButton == LEFT) {
    let d = dist(x, y, mouseX, mouseY);
    textSize(fontSizeMin + d / 5);
    let newLetter = letters.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      let angle = atan2(mouseY - y, mouseX - x);
      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
      if (counter >= letters.length) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
}