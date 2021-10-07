function setup() {
  createCanvas(100, 100, WEBGL);
}
function draw() {
  background(0);
  noStroke();
  ambientLight(0);
  emissiveMaterial(130, 230, 0);
  sphere(40);
