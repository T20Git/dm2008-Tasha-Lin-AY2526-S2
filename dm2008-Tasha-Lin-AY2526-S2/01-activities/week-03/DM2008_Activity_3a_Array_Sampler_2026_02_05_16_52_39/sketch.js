// DM2008 — Activity 3a
// (Array Sampler, 25 min)

// 1. Create an array of colors (or other values)
//    You can make more than one array if you'd like
let clr = ["#9BF781", "#DBD34F", "#8098DC", "#21319D"];
let sz = [100, 200, 300, 400];

// 2. A variable to track the current index
let clrIndex = 0;
let szIndex = 0;

let lastSlowUpdate = 0;
const slowUpdateInterval = 200; // 500ms (0.5 seconds)

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  const spacing = width / (sz.length + 1);
  
  // 3. Use the array value at currentIndex
  fill(clr[clrIndex]);
  ellipse(width / 2, height / 2, sz[szIndex]);
  
  // Draw circle iterations
  // for (let i = 0; i < sz.length; i++) {
  //   fill(sz[i]);                   // use the i-th color
  //   const x = (i + 1) * spacing;        // position from the loop index
  //   ellipse(x, height / 2, 20);
  // }
  
  if (millis() - lastSlowUpdate > slowUpdateInterval) {
    clrIndex++;
  // Reset to 0 when we reach the end
  if (clrIndex >= clr.length) {
    clrIndex = 0;
  }

  szIndex++;
  // Reset to 0 when we reach the end
  if (szIndex >= sz.length) {
    szIndex = 0;
  }
    lastSlowUpdate = millis();
  }
}

// 4. Change the index when a key is pressed
// function mousePressed() {
  // Advance to the next item
 

  // Log in the console to check
  console.log("Clr index:", clrIndex, "→", clr[clrIndex]);
// }

function keyPressed() {
  if (key == "a" || key == "A") {
    clr.push(color(random(255), random(255), random(255)));
  }
}

/* 
TODOs for students:
1. Replace colors with your own data (positions, text, sizes, etc).
2. Try mousePressed() instead of keyPressed().
3. Use push() to add new items, or splice() to remove them, then check how the sketch adapts.
4. Try looping through an array to visualize all the items within it instead of accessing one item at a time.
*/
