function setup() {
  createCanvas(400, 400);
  background(0);
  // frameRate(1);

}

let i = 0;

function draw() {
  // const now = new Date();
  // const [seconds, minutes, hours] = [
  //   now.getSeconds(),
  //   now.getMinutes(),
  //   now.getHours(),
  // ];
  
  
  // if (i > 60) {
  //   i = 0;
  // }
  // if (i < 15) {
  //   spring();
  // } else if( i > 15) {
  //   summer();
  // }

  let radius = 1;
  let distance = 1;

  stroke(255);
  angle = 1 * i;
  distance += 3;
  let x = 200 + (radius + distance * angle) * Math.cos(angle);
  let y = 200 + (radius + distance * angle) * Math.sin(angle);
  circle(x, y, 5, 5);
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

