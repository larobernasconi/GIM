let flakes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  background(0);
  if (frameCount % 10 === 0) {
    let flake = {
      x: random(width),
      y: -10,
      size: random(5, 20),
      speed: random(1, 3)
    };
    flakes.push(flake);
  }
  for (let i = flakes.length - 1; i >= 0; i--) {
    let flake = flakes[i];
    flake.y += flake.speed;

    stroke(255);
    strokeWeight(flake.size);
    point(flake.x, flake.y);

    if (flake.y > height) {
      flakes.splice(i, 1);
    }
  }
}



	// non si possono avere due variabili identiche
//	spessore = random(1,3)
//	lunghezza = random(20,100)
//	posX = random(0,width) 
//	posY = random(-100,height)
	

//	stroke(255)
//	strokeWeight(spessore)
//	line(posX,posY,posX,posY + lunghezza)

