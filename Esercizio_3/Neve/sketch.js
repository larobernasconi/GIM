const snowflakes = [];
const ground = [];

const minSpeed = 1;
const maxSpeed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  stroke(255);
  fill(255);

  for(let i = 0; i < 100; i++){
    snowflakes.push(createVector(
      random(width), random(height),
      random(minSpeed, maxSpeed)));
  }

  for(let x = 0; x < width; x++) {
    ground[x] = height;
  }
}

function draw() {
  background(0);

  for(const snowflake of snowflakes) {
    snowflake.y += snowflake.z;

    rect(snowflake.x, snowflake.y, 1, 1);

    if(snowflake.y >= ground[floor(snowflake.x)]) {
      ground[floor(snowflake.x)]--;

      snowflake.x = random(width);
      snowflake.y = 0;
    }
  }

  for(let x = 0; x < width; x++) {
    rect(x, ground[x], 1, height - ground[x]);
  }
}