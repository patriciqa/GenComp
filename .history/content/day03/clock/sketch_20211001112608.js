function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(60); //60 times per second

}

let i = 0;

function draw() {
  // 3600: clear after one minute
  if (i > 3600) {
    i = 0;
    clear();
    background('pink');
  }
  if (i == 0) { //60x15
    spring();
  } else if (i == 900) {
    summer();
  } else if (i == 1800 ) {
    autumn();
  } else if (i == 2700) {
    winter();
  }



  let radius = 0.5;
  let distance = 0.5;

  stroke(0);
  angle = 0.1 * i;
  distance += 0.008;
  let x = 200 + (radius + distance * angle) * Math.cos(angle);
  let y = 200 + (radius + distance * angle) * Math.sin(angle);
  if (i % 60 == 0) { //per second 
    circle(x, y, 5, 5);
  } else {
    point(x, y)
  }
  i++;

 

}


function spring() {
  background('pink');
}

function summer() {
  background('orange');
}








// spiraleLogarithmic(0.5, 0.5, 3600);
function spiraleLogarithmic(radius, distance, size) {
  stroke(255);
  for (i = 0; i < size; i++) {
    angle = 0.1 * i;
    distance += 0.008;
    let x = 200 + (radius + distance * angle) * Math.cos(angle);
    let y = 200 + (radius + distance * angle) * Math.sin(angle);
    point(x, y);
  }
}

