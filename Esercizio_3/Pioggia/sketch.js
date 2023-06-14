let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  background(0);
  drops.forEach(drop => {
    drop.fall();
    drop.show();
  });
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);
  }
  
  fall() {
    this.y += this.yspeed;
    let gravity = map(this.z, 0, 20, 0, 0.2);
    this.yspeed += gravity;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 1, 20);
    }
  }
  
  show() {
    let thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}