const now = new Date();

let milliseconds = now.getMilliseconds;

let i = now.getMilliseconds;;

function setup() {
  createCanvas(400, 400);
  background('#0b0500');
  frameRate(60); //60 times per second
}

function draw() {
  // 3600: clear after one minute
  if (i >= 60000) {
    // i = 0;
    clear();
    background('#0b0500');
  }
  if (i == 0) { //60x15
    season('spring');
  } else if (i == 15000) {
    season('summer');
  } else if (i == 30000) {
    season('autumn');
  } else if (i == 45000) {
    season('winter');
  }

  let radius = 0.5;
  let distance = 0.5;

  angle = 0.1 * i;
  distance += 0.01;
  let x = 200 + (radius + distance * angle) * Math.cos(angle);
  let y = 200 + (radius + distance * angle) * Math.sin(angle);
  if (i % 60 == 0) { //per second 
    rect(x, y, 5, 5);
  } else {
    point(x, y)
  }
  // i++;
}


function season(season) {
  switch (season) {
    case 'spring':
      stroke('#fe00f6');
      fill('#fe00f6')
      break;
    case 'summer':
      stroke('#fdfe02');
      fill('#fdfe02')
      break;
    case 'autumn':
      stroke('#9933FF');
      fill('#9933FF')
      break;
    case 'winter':
      stroke('#00fff9');
      fill('#00fff9')
      break;
    default:
      console.log('Sorry no season was detected');
  }
}

