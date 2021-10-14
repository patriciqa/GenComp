let vid;

function preload(){
  vid = createVideo("NuclearExplosion.mp4");
  vid.loop();
  vid.hide();
}

function setup() {
  createCanvas(320, 240);
}
function draw() {
  background(0);
  
  vid.loadPixels();
  for (y = 0; y < height; y += 10) {
    for (x = 0; x < width; x += 10) {
      
      let offset = ((width)*x)*2;
      fill(vid.pixels[offset+5],
        vid.pixels[offset+10],
        vid.pixels[offset+20]);
      
      noStroke();
      rect(x, y, 5, 5); 
    }
  }
}


