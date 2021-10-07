let fontsize = 32;
let color = CSS_COLOR_PURPLE;


let CSS_COLOR_PURPLE = ['#2d00f7ff', '#6a00f4ff', '#a100f2ff', '#b100e8ff', '#bc00ddff', ' #d100d1ff', '#db00b6ff', '#e500a4ff', '#f20089ff'];
let CSS_COLOR_GREEN = ["#dad7cd", "#a3b18a", "#588157", "#3a5a40", "#344e41"];
let CSS_COLOR_COLORFUL = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
let CSS_COLOR_RED = ["#283d3b", "#197278", "#edddd4", "#c44536", "#772e25"]
let CSS_COLOR_PINK = ["#d8e2dc", "#ffe5d9", "#ffcad4", "#f4acb7", "#9d8189"]

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
}

function setup() {
  createCanvas(800, 400);

  // Set text characteristics
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(160);
  textFont("Marcellus");
  drawWords(word, fontsizee, count, fontColor);
  textSize(fontsize);
  fill(0, 102, 153);

  // text("halllllooooo", 400, 200);
  // text('word', 10, 30);
  // text('word', 10, 60);
  // fill(0, 102, 153, 51);
  // text('word', 10, 90);


  // Set the gap between letters and the left and top margin

  // Set the counter to start at the character you want
  // in this case 35, which is the # symbol
  stroke('pink');

}

functiondrawWords(word, fontsizee, count, fontColor) {
  color = fontColor;
  let randomColor = color[Math.floor(Math.random() * color.length)];
  fill(randomColor);
  textSize(fontsizee);
  text('word', 200, 200);


}