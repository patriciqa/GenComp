let img;
function preload() {
  img = loadImage('./waterfall.jpg');
}

function setup() {
  image(img, 0, 0, 400, 400);
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d / 2);
  loadPixels();
  for (let i = 0; i < halfImage; i++) {
    pixels[i + halfImage] = pixels[i];
  }
  updatePixels();
}