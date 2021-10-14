let img;
function preload() {
  img = loadImage('./waterfall.jpg');
}

function setup() {
  createCanvas(400, 400)
  image(img, 0, 0, 400, height);
  let d = pixelDensity(1);
  let halfImage = 4 * (width * d) * (height * d);
  loadPixels();
  for (let i = 0; i < halfImage; i++) {
    pixels[i + halfImage] = pixels[i];
  }
  updatePixels();
}