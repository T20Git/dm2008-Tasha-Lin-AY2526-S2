// DM2008 — Activity 3b
// (One Function Wonder, 20 min)

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  // TODO 1:
  // Define a function that draws something (a shape or group of shapes).
  // It should take at least one parameter (e.g., position, size, or color).
  // x,y,s,reps width,height,size,reps
  drawBetterFlower(width / 2, height / 2, 50, 8);
  drawBetterFlower((width / 5) * 4, height / 7, 12, 4);

  // TODO 2:
  // Call your function multiple times with different parameter values.
  // myShape(100, 200, 50);
  // myShape(300, 200, 80);

  // TODO 3:
  // (Challenge) Call your function inside a for loop
  // to create a repeating pattern or variation.
}

// function drawCircle(x, y, s) {
//   noStroke();
//   fill("#FFC107");
//   ellipse(x, y, s);
// }

// function drawPetal(x, y, s) {
//   fill("#CDC0F6");
//   ellipse(x, y, s);
//   noStroke();
// }

function drawBetterFlower(x, y, s, reps) { // have reps as a dynamic value, can change in draw
  fill("#FFC107");
  noStroke();
  ellipse(x, y, s, s);

  for (let i = 0; i < reps; i++) {
    push(); // push and pop within for loop
    if (i % 2 == 0) {
      // why col not alternating right :c
      fill("#F6C0CA");
    } else {
      fill("#CDC0F6");
    }
    translate(x, y);
    rotate((TAU / reps) * i); // TAU same as 2*PI
    noStroke();
    ellipse(0, s * 1.8, s, s * 2); // keep the distance proportionate i think idk
    //every iteration of the loop a petal will form another 45 degrees
    pop();
  }
  // why my circle have stroke :c
  // noStroke to set before shape
}

// Example starter function:
// function myShape(x, y, s) {
//   ellipse(x, y, s, s);
// }
