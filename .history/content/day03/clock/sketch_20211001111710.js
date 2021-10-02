function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(60); //60 times per second

}

let i = 0;

function draw() {
  // const now = new Date();
  // const [seconds, minutes, hours] = [
  //   now.getSeconds(),
  //   now.getMinutes(),
  //   now.getHours(),
  // ];

// 3600 -
  if (i > 180) {
    i = 0;
    clear();
    background('orange');
  }
  if (i < 900) { //60x15
    spring();
  } else if( i > 15) {
    summer();
  }

  let radius = 0.5;
  let distance = 0.5;

  stroke(255);
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

  // spiraleLogarithmic(0.5, 0.5, 3600);
}


function spring() {
  background('pink');
}

function summer() {
  background('orange');
}








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
