// DM2008 – Activity 4a
// Bake a Cookie (30 min)

let cookie;

function setup() {
  createCanvas(400, 400);
  noStroke();

  // Step 3: make one cookie object
  cookie = new Cookie("chocolate", 80, width/2, height/2);
  cookie2 = new Cookie("vanilla", 70, width/3, height/3);
  cookie3 = new Cookie("strawberry", 90, width/4*3,height/2);
}

function draw() {
  background(230);

  // Step 4: call the cookie’s show() method
  cookie.show();
  cookie2.show();
  cookie3.show();
  cookie.move(); ////if call cookie.move here, always updating so movement is smooth
}

// Step 1: define the Cookie class
class Cookie {
  constructor(flavor, sz, x, y) {
    // set up required properties
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  // Step 2: display the cookie
  show() {
    switch (this.flavor) {
      case "chocolate":
        fill(196, 146, 96);
        break;
      case "vanilla":
        fill(247, 240, 228);
        break;
        case "strawberry":
        fill(250, 212, 218);
        break;
      default:
        fill(220, 180, 120);
    }
    ellipse(this.x, this.y, this.sz);
  }

  // Steps 5 & 6: Implement additional methods here
  randomizer() {
    this.flavor = random(["chocolate", "vanilla", "strawberry"]);
  }
  
  move() {
    if(keyIsDown(LEFT_ARROW) == true) {
      this.x -= 5;
    }
    if(keyIsDown(RIGHT_ARROW) == true) {
      this.x += 5;
    }
  }
}

// Step 5: add movement (keyboard arrows)
function keyPressed() {
  // cookie.move(); //if call cookie.move here, only called once so movement is staggered
}
// Add keyboard interaction so the cookie can move around the canvas

// Step 6: add flavor randomizer (mouse click)
function mousePressed() {
  cookie.randomizer();
  cookie2.randomizer();
  cookie3.randomizer();
}
// mouse click action that randomizes its flavor between a minimum of three options

//bro what is happening in this class
