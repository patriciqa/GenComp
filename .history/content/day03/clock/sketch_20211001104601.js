function setup() {
  createCanvas(400, 400);
  background(0);
}


function draw() {
  const now = new Date();
  const [seconds, minutes, hours] = [
    now.getSeconds(),
    now.getMinutes(),
    now.getHours(),
  ];

  spiraleLogarithmic(2, 2, 3600);
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

