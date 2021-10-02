function setup() {
  createCanvas(400, 400);
  background(0);
}

let i = 0;

function draw() {
  // const now = new Date();
  // const [seconds, minutes, hours] = [
  //   now.getSeconds(),
  //   now.getMinutes(),
  //   now.getHours(),
  // ];
  let radius = 0.5;
  let distance = 0.5;
  let size = 3600;
  stroke(255);

  angle = 0.1 * i;
  distance += 0.008;
  let x = 200 + (radius + distance * angle) * Math.cos(angle);
  let y = 200 + (radius + distance * angle) * Math.sin(angle);
  point(x, y);
  i++;

  spiraleLogarithmic(0.5, 0.5, 3600);
}

function winter() {

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

