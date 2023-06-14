let xpos, ypos;
let xspeed = 2.8;
let yspeed = 2.2;
let xdirection = 1;
let ydirection = 1;
let rad = 100

function setup() {
createCanvas(windowWidth, windowHeight);
noStroke()
frameRate(100)
ellipseMode(RADIUS)
xpos = width/2
ypos = height/2

}

function draw() {
  colorMode(HSB);

  let hue = map(frameCount, 0, 360, 0, 360);
  let saturation = map(frameCount, 0, 360, 50, 100);
  let brightness = map(frameCount, 0, 360, 50, 100);

  fill(hue, saturation, brightness);

  background(200);
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  ellipse(xpos, ypos, rad, rad);
}