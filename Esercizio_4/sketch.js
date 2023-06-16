function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(64);
  }
  
  function draw() {
	background(0);
  
	let snapshot = int(random(1000000));
	if (mouseIsPressed) {
	  textSize(25);
	  fill(255);
	  textFont('Helvetica');
	  textStyle(BOLD)
	  text("there is no such thing as time", width/2, height/2)
	  ;
	} else {
	  textSize(64);
	  fill(255);
	  text(snapshot, width/2, height/2);
	}
  }