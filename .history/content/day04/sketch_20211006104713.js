let font,
  fontsize = 32;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(800, 400);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(160);
  textSize(32);
  fill(0, 102, 153);

  text("halllllooooo", 400, 200);
text('word', 10, 30);
text('word', 10, 60);
fill(0, 102, 153, 51);
text('word', 10, 90);


  // Set the gap between letters and the left and top margin

  // Set the counter to start at the character you want
  // in this case 35, which is the # symbol
stroke('pink');

}