speedx = 1
speedy = 1
function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
background(0,0,0);

let lato = 400;

noStroke();
fill(255);

for (let i=0; i<100; i++) {
  let size = random(1, 5);
  let posX = random(-lato, lato);
  let posY = random(-lato, lato);
  let posZ = random(-lato, lato);

  push();
  translate(posX, posY, posZ);
  rotate(speedx * frameCount, [1, 0, 0]);
  rotate(speedy * frameCount, [0, 1, 0]);
  ellipse(0, 0, size, size * 1);
  pop();
}
}