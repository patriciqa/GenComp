let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ,.!?"
let counters = [];
let joinedText;
let posX;
let posY;
let drawAlpha = true;

function preload() {
  joinedText = loadStrings("./text.txt");
}
function setup() {
  createCanvas(620, 400);
  //
  joinedText = joinedText.join(" ");
  for (let i = 0; i < alphabet.length; i++) {
    counters[i] = 0;
  }
  countCharacters();
}

function draw() {
  background("black");
  posX = 20;
  posY = 40;

  for (let i = 0; i < joinedText.length; i++) {
    let upperCaseChar = joinedText.charAt(i).toUpperCase();
    let index = alphabet.indexOf(upperCaseChar);
    if (index < 0) continue;

    if (drawAlpha) {
      fill(153, 255, 255, counters[index] * 3);
    } else {
      fill(153, 255, 255);

    }

    let sortY = index * 20 + 40;
    let m = map(mouseX, 50, width - 50, 0, 1);
    m = constrain(m, 0, 1);
    let interY = lerp(posY, sortY, m);

    text(joinedText.charAt(i), posX, interY);

    posX += textWidth(joinedText.charAt(i));
    if (posX >= width - 200 && upperCaseChar == " ") {
      posY += 30;
      posX = 20;
    }
  }
}

function countCharacters() {
  for (let i = 0; i < joinedText.length; i++) {
    let c = joinedText.charAt(i);
    let upperCaseChar = c.toUpperCase();
    let index = alphabet.indexOf(upperCaseChar);
    if (index >= 0) counters[index]++;
  }
}
