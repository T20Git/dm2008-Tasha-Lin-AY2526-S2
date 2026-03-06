// DM2008
// Activity 1b (Georg Nees)

let x;
let y;
let w;
let c1;
let e;
let c2;
let p;

let lastSlowUpdate = 0;
const slowUpdateInterval = 200; // 500ms (0.5 seconds)

function setup() {
  createCanvas(800, 800);
  background(20, 19, 102);
  e = 0;
  p = 20;
}

function draw() {
  x = random(width);
  y = random(height);
  w = random(10, 80);
  c1 = color(random(255), random(255), 230);
  e = e + 1;
  c2 = color(255, random(255), random(18));

  background(20, 19, 102, 10);

  if (millis() - lastSlowUpdate > slowUpdateInterval) {
    stroke(c2);
    strokeWeight(random(0.1, 10));
    //fill(0);
    ellipse(400, 400, e);
    lastSlowUpdate = millis();
  }

  stroke(c1);
  strokeWeight(random(0.5, 3));
  noFill();
  rect(x, y, w, w);

  ellipse(mouseX, mouseY, p);
}

function mouseDragged() {
  p = p + 0.1;
}

function keyPressed() {
  saveCanvas("activity1b-image", "jpg");
}
