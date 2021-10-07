let font,
  fontsize = 32;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  // font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(710, 400);

  // Set text characteristics
  // textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(160);

  // Set the gap between letters and the left and top margin
  let gap = 52;
  let margin = 10;
  translate(margin * 4, margin * 4);

  // Set the counter to start at the character you want
  // in this case 35, which is the # symbol
  let counter = 35;
fill('pink')
  text("hi");

}