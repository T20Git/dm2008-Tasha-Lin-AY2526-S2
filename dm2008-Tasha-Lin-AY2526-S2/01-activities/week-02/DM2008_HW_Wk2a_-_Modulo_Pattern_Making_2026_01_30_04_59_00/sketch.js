// DM2008 — Activity 2b
// (Pattern Making, 40 min)

let d1;
let d2;
let d3;

let s1;
let s2;
let s3;

let b1;
let b2;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  d1 = color("#F2BC50");
  d2 = color("#F7D759");
  d3 = color("#F0953A");

  s1 = color(220);
  s2 = color(240);
  s3 = color(120);
  
  b1 = color("#C3F5FA");
  b2 = color('#0B4773');
}

function draw() {
  background(b1);

  // Horizontal row of shapes
  for (let i = 0; i < width - 50; i += 20) {
    // Alternate colors using % (modulo)
    if (i % 3 == 0) {
      fill(d1); // pink
      ellipse(i + 40, height / 2, 30, 25);
      noStroke();
    } else if (i % 3 == 1) {
      fill(d2); // green
      ellipse(i + 15, height / 2, 20);
      noStroke();
    } else {
      fill(d3); // green
      rect(i + 48, height / 2, 10, 6);
      noStroke();
    }
    // TODO: change ellipse to rect, triangle, or something else
    // TODO: try varying size instead of color
  }

  if (mouseIsPressed) {
    d1 = s1;
    d2 = s2;
    d3 = s3;
    b1 = b2;
  } else {
    d1 = color("#F2BC50");
    d2 = color("#F7D759");
    d3 = color("#F0953A");
    b1 = color("#C3F5FA");
  }

  // TODO: add one interaction (mouse or key) to change the rule
  // Example: if (mouseIsPressed) { fill(255, 0, 0); }
}
