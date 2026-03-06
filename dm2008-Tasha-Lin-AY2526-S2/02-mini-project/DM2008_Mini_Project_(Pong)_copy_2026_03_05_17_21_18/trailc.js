/* ----------------- Classes ----------------- */
class TrailC {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.a = 255;
    this.life = 20;
  }

  update() {
    this.a -= 10;
    this.life--;
  }

  show() {
    noStroke();
    fill(217, 211, 210, this.a);
    circle(this.x, this.y, this.r);
  }
}