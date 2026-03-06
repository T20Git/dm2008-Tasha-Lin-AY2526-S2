// DM2008 — Activity 2a
// (Mode Switch, 20 min)

let x = 0;        // ellipse x-position
let size = 50;    // ellipse size (you can change this in your if/else)
let bgColor;      // background color set by switch(key)
let speed = 2;

function setup() {
  createCanvas(400, 400);
  bgColor = color(255, 230, 201);
}

function draw() {
  background(bgColor);
  
  ellipse(x, height / 2, size);
  
  //Change colour on mouse press
  if (mouseIsPressed) {
    fill(97, 212, 185);
    strokeWeight(5);
    stroke(255, 43, 181);
  } else {
    fill(127, 65, 99);
    noStroke();
  }
  
  // Change size on right half
  // if (x > width / 2) {
  //   size = 100;
  // } else {
  //   size = 50;
  // }
  
  // // Change speed using mouse position (THEN comment out x += 2; above)
  // if (mouseX > width / 2) {
  //   x += 2; // faster on right
  // } else {
  //   x += 0.5; // slower on left
  // }
  
  x += speed;
  // Wrap around when it exits the right edge
  if (x > width - size / 2) {
    speed = speed*-1;
  }
  if (x < 0) {
    speed = speed*-1;
  }
}

// --- Mode switching with number keys: 1, 2, 3 ---
function keyPressed() {
  switch (key) {
    case '1':
      bgColor = color(201, 70, 16,20); // red
      break;
    case '2':
      bgColor = color(211, 242, 148,20); // green
      break;
    case '3':
      bgColor = color(106, 159, 176,20); // blue
      break;
    default:
      bgColor = color(255, 230, 201,20);           // grey
  }
}