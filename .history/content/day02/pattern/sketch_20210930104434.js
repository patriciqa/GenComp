function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	//For (var BEGIN; END; INTERVAL){
	//DO SOMETHING }
	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 5) {
			stroke(0);
			strokeWeight(1);
			circle(x, 0, 2, 2);
			circle(0, y, 2, 2);
		}
	}
}