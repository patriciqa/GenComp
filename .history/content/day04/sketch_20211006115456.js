


let CSS_COLOR_PURPLE = ['#2d00f7ff', '#6a00f4ff', '#a100f2ff', '#b100e8ff', '#bc00ddff', ' #d100d1ff', '#db00b6ff', '#e500a4ff', '#f20089ff'];
let CSS_COLOR_GREEN = ["#dad7cd", "#a3b18a", "#588157", "#3a5a40", "#344e41"];
let CSS_COLOR_COLORFUL = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
let CSS_COLOR_RED = ["#283d3b", "#197278", "#edddd4", "#c44536", "#772e25"]
let CSS_COLOR_PINK = ["#d8e2dc", "#ffe5d9", "#ffcad4", "#f4acb7", "#9d8189"]


let fontsize = 50;
let color = CSS_COLOR_COLORFUL;
let word = "ART";

let count = 100;

function setup() {
  createCanvas(800, 400);

  // Set text characteristics

  frameRate(1)
}

function draw() {
  background('black');
  textFont("Marcellus");
  drawWords(word, fontsize, color);

}

function drawWords(word, fontsize, fontColor) {
  color = fontColor;
  let randomColor = color[Math.floor(Math.random() * color.length)]; //random from color palette
  let randomNumber = Math.floor(Math.random() * 100); //random from 0 - 400
  fill(randomColor);
  textSize(fontsize);

  const words = word.toString();
  for (let i = 0; i < fontsize; i++) {
    text(words, i * randomNumber, count+randomNumber);
    text(words, i + randomNumber, 2 * count +randomNumber);
    text(words, i +randomNumber, 3 * count);
    translate(100, 0);

  }

  for (let i = 0; i < fontsize; i++) {
    circle(0, 300, fontsize);
    translate(randomNumber, 0)
  }
}