/* ----------------- Classes ----------------- */
class Paddle {
  constructor(x, y, w, h, textx, img) {
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vy = 0; // current velocity (students will change this via input)
    this.speed = 5; // how fast the paddle moves
    this.score = 0;
    this.textx = textx;
    this.img = img;
  }

  update() {
    // basic vertical movement; constrained to canvas
    this.pos.y += this.vy;
    this.pos.y = constrain(this.pos.y, this.h/2, height - (this.h/2));
  }

  show() {
    fill(220);
    //rect(this.pos.x, this.pos.y, this.w, this.h);
    image(this.img, this.pos.x, this.pos.y, 50, 50); // show image

    textSize(35);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(this.score, this.textx, 60);
  }

  addScore() {
    this.score++;
  }
}