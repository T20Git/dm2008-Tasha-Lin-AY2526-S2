let colorBtn, sizeSlider, shapeSelect;
let shapeColor;
let trpSlider;

function setup() {
  createCanvas(500, 400);
  noStroke();

  
  
  // starting color
  shapeColor = color(0);

  // Button: change color
  createP("Colour").position(width/5*0.5, 50).style("margin", "10px 0 0 10px").style("font-family","Courier New");
  colorBtn = createButton("Randomise Colour").style("font-family","Courier New");
  colorBtn.position(width/5*0.2, 30);
  colorBtn.mousePressed(randomShapeColor);
  
  function randomShapeColor() {
    shapeColor = color(random(255), random(255), random(255), random(255));
  }

  // Slider: controls size
  createP("Size").position(width/5*2.25, 50).style("margin", "10px 0 0 10px").style("font-family","Courier New");
  sizeSlider = createSlider(10, 200, 100, 1);
  sizeSlider.position(width/2*0.75, 30);

  // Dropdown: choose shape
  createP("Shape").position(width/5*3.9,50).style("margin", "10px 0 0 10px").style("font-family","Courier New");
  shapeSelect = createSelect().style("font-family","Courier New");
  shapeSelect.position(width/5*3.85, 30);
  shapeSelect.option("ellipse");
  shapeSelect.option("rect");
  shapeSelect.option("triangle");
  
  //transparency
    createP("Transparency").position(width/5*0.25, 350).style("margin", "10px 0 0 10px").style("font-family","Courier New");
  trpSlider = createSlider(10, 250, 250, 1);
  trpSlider.position(width/5*0.3, 330);
}

function draw() {
  background(200);

  push();
  translate(width/2, height/3*1.6);
  let s = sizeSlider.value();
    let t = trpSlider.value();
    shapeColor.setAlpha(t);
  fill(shapeColor);

  // draw chosen shape
  let choice = shapeSelect.value();
  if (choice === "ellipse") {
    ellipse(0, 0, s, s);
  } else if (choice === "rect") {
    rectMode(CENTER);
    rect(0, 0, s, s);
  } else if (choice === "triangle") {
    triangle(-s * 0.6, s * 0.5, 0, -s * 0.6, s * 0.6, s * 0.5);
  }
  pop();
}
