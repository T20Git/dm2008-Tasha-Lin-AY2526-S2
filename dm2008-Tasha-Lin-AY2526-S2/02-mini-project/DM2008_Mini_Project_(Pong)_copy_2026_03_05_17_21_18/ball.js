/* ----------------- Classes ----------------- */
class Ball {
  constructor(x, y, r, img) {
    this.pos = createVector(x, y);
    this.r = r;
    this.img = img;

    // separate speed components (easier for students to adjust)
    this.xSpeed = 3.5; // horizontal speed (try 2-5)
    this.ySpeed = 2.0; // vertical speed (try 1-4)

    this.vel = createVector(0, 0); // actual velocity vector

    // TODO (students): uncomment to start ball moving immediately
    this.vel.x = random([-1, 1]) * this.xSpeed;
    this.vel.y = random([-1, 1]) * this.ySpeed;
    this.trailsA = [];
  }

  update() {
    this.pos.add(this.vel);
    for (let i = this.trailsA.length - 1; i >= 0; i--) {
    if (this.trailsA[i].life <= 0) {
      this.trailsA.splice(i, 1);
    }
  }
     if (millis() - lastSlowUpdate > slowUpdateInterval) {
       lastSlowUpdate = millis();
       let trailIns = new TrailC(this.pos.x, this.pos.y); // created an instance of a trail
    this.trailsA.push(trailIns); //add instance to the list of all trails
     }
  }

  checkWallBounce(l_pad, r_pad) {
    // bounce off top/bottom walls
    if (this.pos.y - this.r <= 0 || this.pos.y + this.r >= height) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
    }

    // TODO (students): detect when ball passes left or right edge
    // Add scoring and reset the ball to center
    // Hints:
    if (this.pos.x + this.r < 0) {
      /* right player scores - add to their score */
      r_pad.addScore();
      this.reset();
    }
    if (this.pos.x - this.r > width) {
      /* left player scores - add to their score */
      l_pad.addScore();
      this.reset();
    }
  }

  checkPaddleBounce(paddle) {
    // Box collision detection (simple & forgiving)
    const withinY =
      this.pos.y > paddle.pos.y && this.pos.y < paddle.pos.y + paddle.h;
    const withinX =
      this.pos.x + this.r > paddle.pos.x &&
      this.pos.x - this.r < paddle.pos.x + paddle.w;

    if (withinX && withinY) {
      // push ball out so it doesn't get stuck
      if (this.vel.x < 0) {
        this.pos.x = paddle.pos.x + paddle.w + this.r;
      } else {
        this.pos.x = paddle.pos.x - this.r;
      }
      this.vel.x *= -1; // reflect horizontally

      // TODO (students): add some angle variation based on where ball hits paddle
      // Hint: 
      this.vel.y += (this.pos.y - paddle.pos.y - paddle.h/2) * 0.1;
    }
  }

  show() {
    for (let i = 0; i < this.trailsA.length; i++) { // show trail
      this.trailsA[i].update(); // change over time
      this.trailsA[i].show(); // draw
    }
    // circle(this.pos.x, this.pos.y, this.r * 2);
    image(this.img, this.pos.x, this.pos.y, 30, 30); // show image
    
  }

  reset() {
    // return ball to center and give it a random direction
    this.pos.set(width / 2, height / 2);

    // use the xSpeed and ySpeed properties for consistent behavior
    const xDir = random([-1, 1]); // randomly left or right
    const yDir = random([-1, 1]); // randomly up or down
    this.vel.set(xDir * this.xSpeed, yDir * this.ySpeed);
  }
}