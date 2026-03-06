// DM2008 – Activity 5a
// Colliding Circles (30 min)

let balls = [];

function setup() {
  createCanvas(400, 400);

  // Step 1: create two Ball objects
  balls.push(new Ball(100, 200));
  balls.push(new Ball(200, 100));
}

function draw() {
  background(230);

  // Step 2: update and display each ball
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.show();

    // Step 3: check collisions
    // Use dist() between ball centers
    // Trigger feedback (color, bounce, etc.)
    b.checkCollision(balls);
  }
}

class Ball {
  constructor(x, y) {
    this.r = 30;
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  move() {
    this.pos.add(this.vel);
    // TODO: wrap around OR bounce off edges
    // if (this.pos.x < -this.r) {this.pos.x = width + this.r;}
    // if (this.pos.x > width + this.r) {this.pos.x = -this.r;}
    // if (this.pos.y < -this.r) {this.pos.y = height + this.r;}
    // if (this.pos.y > height + this.r) {this.pos.y = -this.r;}

    if (this.pos.x - this.r <= 0 || this.pos.x + this.r >= height) {
      this.vel.x *= -1;
      this.pos.x = constrain(this.pos.x, this.r, height - this.r);
    }

    if (this.pos.y - this.r <= 0 || this.pos.y + this.r >= height) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
    }
  }

  show() {
    fill(255, 112, 112);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  // Step 4: Add a method to checkCollision(others)
  // Use dist() and respond visually
  checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      if (others[i] !== this) {
        let other = others[i];
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.r + other.r) {
          push();
          fill(43, 24, 219);
          stroke(207, 250, 185);
          strokeWeight(4);
          ellipse(this.pos.x, this.pos.y, this.r * 2); // highlight on collision
          pop();
        }
      }
    }
  }
}
