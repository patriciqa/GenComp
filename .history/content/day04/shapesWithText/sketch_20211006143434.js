


let CSS_COLOR_PURPLE = ['#2d00f7ff', '#6a00f4ff', '#a100f2ff', '#b100e8ff', '#bc00ddff', ' #d100d1ff', '#db00b6ff', '#e500a4ff', '#f20089ff'];
let CSS_COLOR_GREEN = ["#dad7cd", "#a3b18a", "#588157", "#3a5a40", "#344e41"];
let CSS_COLOR_COLORFUL = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
let CSS_COLOR_RED = ["#283d3b", "#197278", "#edddd4", "#c44536", "#772e25"]
let CSS_COLOR_PINK = ["#d8e2dc", "#ffe5d9", "#ffcad4", "#f4acb7", "#9d8189"]


// let color = CSS_COLOR_PINK;
let colors = new Array(CSS_COLOR_PURPLE, CSS_COLOR_GREEN, CSS_COLOR_COLORFUL, CSS_COLOR_RED, CSS_COLOR_PINK);
let count = 100;

function setup() {
  createCanvas(800, 400);


  wordInputText = createElement('p', 'Word');
  wordInputText.position(10, 400);
  wordInput = createInput();
  wordInput.position(10, 450);

  sizeInputText = createElement('p', 'Number');
  sizeInputText.position(200, 400);
  sizeInput = createInput();
  sizeInput.position(200, 450);

  colorInputText = createElement('p', 'Color (0-4)');
  colorInputText.position(400, 400);
  colorInput = createInput();
  colorInput.position(400, 450);

  frameRate(1)
}

function draw() {
  if (wordInput.value() == "") {
    word = "Type sth";
  } else {
    word = wordInput.value();
  }
  if (sizeInput.value() == "") {
    size = 25;
  } else {
    size = sizeInput.value();
  }
  if (colorInput.value() == "0" || colorInput.value() == "1" || colorInput.value() == "2" || colorInput.value() == "3" || colorInput.value() == "4") {
    colorNumber = parseInt(colorInput.value());
  } else {
    colorNumber = 0;
  }
  console.log(colorNumber)

  background('black');
  textFont("Marcellus");
  drawWords(word, size, colors[colorNumber]);

}

function drawWords(word, fontsize, fontColor) {
  color = fontColor;
  let randomColor = color[Math.floor(Math.random() * color.length)]; //random from color palette
  let randomNumber = Math.floor(Math.random() * 300); //random from 0 - 400
  fill(randomColor);
  textSize(fontsize);

  const words = word.toString();
  const length = words.length;

  for (let i = 0; i < length; i++) {
    circle(10 * i, 10, 10);
    square(800 - 10*i, i, 20)

  }


  for (let i = 0; i < fontsize; i++) {

    textSize(fontsize);
    text(words, i - randomNumber, count);
    translate(100, 0);

    textSize(fontsize * 2);
    text(words, i + randomNumber, 2 * count);

    translate(100, 0)

    textSize(1 / 2 * fontsize);
    text(words, i + randomNumber, 3 * count);

    translate(100, 0)


    textSize(3 * fontsize);
    text(words, i - randomNumber, 4 * count);



  }

}