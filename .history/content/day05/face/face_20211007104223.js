let sad = ("( ≧Д≦)", "(∩︵∩)","(︶︹︺)","⊙︿⊙", "(⌯˃̶᷄ ﹏ ˂̶᷄⌯)", "(๑◕︵◕๑)", "(｡•́︿•̀｡)", "(✖╭╮✖)", "(▰˘︹˘▰)", "(oꆤ︵ꆤo)", "(⊙︿⊙✿)", "(´°ω°`)", "( .. )");
let cry = ("(っ˘̩╭╮˘̩)っ","ಥ_ಥ", "(个_个)", "(っ˘̩╭╮˘̩)っ", "⁝(˚͈͈͈͈̥̆₍₎˚͈͈͈͈̥̆⁎)⁝", "(῭̩̩̩̥ꄗ΅̩̩̩̥)", "(;•͈́༚•͈̀)");

let CSS_COLOR_PURPLE = ['#2d00f7ff', '#6a00f4ff', '#a100f2ff', '#b100e8ff', '#bc00ddff', ' #d100d1ff', '#db00b6ff', '#e500a4ff', '#f20089ff'];
let CSS_COLOR_GREEN = ["#dad7cd", "#a3b18a", "#588157", "#3a5a40", "#344e41"];
let CSS_COLOR_COLORFUL = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
let CSS_COLOR_RED = ["#283d3b", "#197278", "#edddd4", "#c44536", "#772e25"]
let CSS_COLOR_PINK = ["#d8e2dc", "#ffe5d9", "#ffcad4", "#f4acb7", "#9d8189"]


function setup() {
  createCanvas(800, 400);

//toggle
  wordInputText = createElement('p', 'Emotion');
  wordInputText.position(10, 400);
  wordInput = createInput();
  wordInput.position(10, 450);

  sel = createSelect();
  sel.position(10, 400);
  sel.option('say');
  sel.option('tear');
  sel.option('happy');
  sel.option('surpised');
  sel.selected('happy');
  sel.changed(mySelectEvent);


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
  background(220);
  drawEmoticon(word, size, colors[colorNumber]);
}

function drawEmoticon(word, fontsize, fontColor) {
  color = fontColor;
  let randomColor = color[Math.floor(Math.random() * color.length)]; //random from color palette
  let randomNumber = Math.floor(Math.random() * 300); //random from 0 - 400
  fill(randomColor);
  textSize(fontsize);
  const words = word.toString();



    textSize(3 * fontsize);
    text(words, 400, 200);

  }
