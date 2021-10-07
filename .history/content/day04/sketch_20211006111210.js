


let CSS_COLOR_PURPLE = ['#2d00f7ff', '#6a00f4ff', '#a100f2ff', '#b100e8ff', '#bc00ddff', ' #d100d1ff', '#db00b6ff', '#e500a4ff', '#f20089ff'];
let CSS_COLOR_GREEN = ["#dad7cd", "#a3b18a", "#588157", "#3a5a40", "#344e41"];
let CSS_COLOR_COLORFUL = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
let CSS_COLOR_RED = ["#283d3b", "#197278", "#edddd4", "#c44536", "#772e25"]
let CSS_COLOR_PINK = ["#d8e2dc", "#ffe5d9", "#ffcad4", "#f4acb7", "#9d8189"]


let fontsize = 50;
let color = CSS_COLOR_PURPLE;
let word = "ART";
count = 3

function setup() {
  createCanvas(800, 400);

  // Set text characteristics
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  frameRate(2)
}

function draw() {
  background(160);
  textFont("Marcellus");
  drawWords(word, fontsize, count, color);


}


function drawWords(word, fontsizee, count, fontColor) {
  color = fontColor;
  let randomColor = color[Math.floor(Math.random() * color.length)];
  fill(randomColor);
  textSize(fontsizee);
  const words = word.toString();
  for (let i = 0; i < count; i++) {
    text(words, 200 + i, 200 + i);
  }



}