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
    season('spring');
  } else if (i == 900) {
    season('summer');
  } else if (i == 1800) {
    season('autumn');
  } else if (i == 2700) {
    season('winter');
  }



  let radius = 0.5;
  let distance = 0.5;

  stroke(0);
  angle = 0.1 * i;
  distance += 0.008;
  let x = 200 + (radius + distance * angle) * Math.cos(angle);
  let y = 200 + (radius + distance * angle) * Math.sin(angle);
  if (i % 60 == 0) { //per second 
    rect(x, y, 5, 5);
  } else {
    point(x, y)
  }
  i++;



}


function season(season) {
  switch (season) {
    case 'spring':
      background('#bd9391')
      break;
    case 'summer':
      background('#ffe169');
      break;
    case 'autumn':
      background('#bf4342');
      break;
    case 'winter':
      background('#c0d6df');
      break;
    default:
      console.log('Sorry no season was detected');
  }
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

