let xpos, ypos;
let xspeed = 2.8;
let yspeed = 2.2;
let xdirection = 1;
let ydirection = 1;
let rad = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(60);
  ellipseMode(RADIUS);
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  colorMode(HSB);

  let hue = map(xpos, 0, width, 0, 360); // Adjust hue based on xpos
  let saturation = map(ypos, 0, height, 50, 100); // Adjust saturation based on ypos
  let brightness = 100; // Constant brightness

  background(200);
  xpos += xspeed * xdirection;
  ypos += yspeed * ydirection;

  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  fill(hue, saturation, brightness);
  ellipse(xpos, ypos, rad, rad);
}
