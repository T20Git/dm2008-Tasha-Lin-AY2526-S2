// DDM2008
// Activity 1a

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature in the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  
//   body 1
  fill(255,100,100);
  noStroke();
  rect(100,50,100,250);
  
//   body 2
  fill(255,100,100);
  rect(200,150,150,100);
  
//   body 3
  fill(255,100,100);
  rect(200,250,100,50);
  
// feather 1
  fill(222, 60, 82)
  rect(150,250,50,25);
  
// feather 1
  fill(222, 60, 82)
  rect(200,225,50,25);
  
// feather 1
  fill(222, 60, 82)
  rect(200,175,50,25);
  
// feather 1
  fill(222, 60, 82)
  rect(250,200,25,25);
  
// feather 1
  fill(222, 60, 82)
  rect(125,200,25,50);
  
//   feet
  fill(255,130,0);
  rect(150,300,100,50);
  
//   beak
  fill(255,130,0);
  rect(50,100,50);
  
//   eye
  fill(0);
  rect(125,75,25,50);
  
  helperGrid(); // do not edit or remove this line
}
