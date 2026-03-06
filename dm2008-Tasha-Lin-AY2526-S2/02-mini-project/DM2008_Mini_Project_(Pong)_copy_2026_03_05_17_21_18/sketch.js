// DM2008 — Mini Project
// PONG (Starter Scaffold)

// Notes for students:
// 1) Add paddle controls (W/S and ↑/↓) inside handleInput()
// 2) Add scoring + reset when the ball goes past a paddle
// 3) (Optional) Add win conditions / start + game-over states

/* ----------------- Globals ----------------- */
let leftPaddle, rightPaddle, ball;
let img1, img2, img3;
let sound;
let lastSlowUpdate = 0;
const slowUpdateInterval = 50; // 500ms (0.5 seconds)

/* ----------------- Setup & Draw ----------------- */
function preload() {
  img1 = loadImage("/PNGs/potato_bg.png");
  img2 = loadImage("/PNGs/woman1_left.png");
  img3 = loadImage("/PNGs/woman2_right.png");
  sound = loadSound("/Sound/GameMusicLoopSoft.mp4");
}

function setup() {
  createCanvas(640, 360);
  noStroke();
  imageMode(CENTER);
  sound.play();
  sound.loop();

  // paddles: x, y, w, h, textx
  leftPaddle = new Paddle(50, height / 2, 50, 50, 200, img2);
  rightPaddle = new Paddle(width - 50, height / 2, 50, 50, 430, img3);

  // ball starts center (students: make it move by uncommenting code in Ball constructor)
  ball = new Ball(width / 2, height / 2, 8, img1);
}

function draw() {
  background(25);

  // 1) read input (students: add paddle movement here)
  handleInput();

  // 2) update world
  leftPaddle.update();
  rightPaddle.update();
  ball.update();

  // 3) handle collisions
  ball.checkWallBounce(leftPaddle, rightPaddle); // top & bottom
  ball.checkPaddleBounce(leftPaddle);
  ball.checkPaddleBounce(rightPaddle);

  // 4) draw everything
  drawCourt();
  leftPaddle.show();
  rightPaddle.show();
  ball.show();
}

/* ----------------- Input ----------------- */
function handleInput() {
  // TODO (students): move paddles based on key presses
  // Hints:
  // - Use keyIsDown(87) for W, keyIsDown(83) for S (left paddle)
  // - Use keyIsDown(UP_ARROW), keyIsDown(DOWN_ARROW) (right paddle)
  // - Set paddle.vy to positive (down) or negative (up) values
  // Read up on keyIsDown() in the p5js Reference
  //
  // Example:
  if (keyIsDown(87)) {
    leftPaddle.vy = -leftPaddle.speed;
  } // W key
  if (keyIsDown(83)) {
    leftPaddle.vy = leftPaddle.speed;
  } // S key
  if (keyIsDown(UP_ARROW)) {
    rightPaddle.vy = -rightPaddle.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    rightPaddle.vy = rightPaddle.speed;
  }
}

function keyReleased() {
  // Stop paddles when keys are released
  // (Students: this works automatically once you add handleInput controls)
  leftPaddle.vy = 0;
  rightPaddle.vy = 0;
}





/* ----------------- UI helpers ----------------- */
function drawCourt() {
  // center line (dashed)
  stroke(80);
  strokeWeight(2);
  for (let y = 10; y < height; y += 18) {
    line(width / 2, y, width / 2, y + 8);
  }
  noStroke();
}
