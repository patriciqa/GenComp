function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('pink');
  
for(let i = 0; i <8; i++) {
  fill('black')
  ellipse(60*i, 46, 55, 55);
  line(50*i, 200, 60,   100)
  rect(50*i, 250, 20,   20)
}
 




}
