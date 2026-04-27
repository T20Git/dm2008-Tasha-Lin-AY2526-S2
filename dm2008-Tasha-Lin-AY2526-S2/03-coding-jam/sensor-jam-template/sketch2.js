let port;
let connectBtn;

let sensorVal;
let distance = 0;
let smoothedDistance = 20;
let circleSize = 50;
let targetSize = 50; // used for Option 2

let osc;
let startedAudio = false;

function setup() {
    createCanvas(windowWidth, windowHeight);

    port = createSerial();

    connectBtn = createButton("Connect to Arduino");
    connectBtn.position(20, 20);
    connectBtn.mousePressed(connectBtnClick);

    // Create oscillator
    osc = new p5.Oscillator("sine");
    osc.start();
    osc.amp(0); // start silent
}

function draw() {

    background(30);
    ellipse(width / 2, height / 2, circleSize);

    // Read serial
    if (port.opened()) {
        sensorVal = port.readUntil("\n");

        if (sensorVal.length > 0) {
            let val = float(trim(sensorVal));

            if (!isNaN(val)) {
                distance = val;
            }
            
            targetSize = float(sensorVal);
            // last value in lerp() controls speed of change
            circleSize = lerp(circleSize, targetSize, 0.1);
        }
    }

    // Smooth the value
    smoothedDistance = lerp(smoothedDistance, distance, 0.1);

    // Adjust based on your sensor
    let minDist = 5;
    let maxDist = 100;

    let d = constrain(smoothedDistance, minDist, maxDist);

    // Map distance → frequency
    let freq = map(d, minDist, maxDist, 800, 150);

    osc.freq(freq);

    // Optional: control volume too
    let volume = map(d, minDist, maxDist, 0.4, 0.05);
    osc.amp(50); // initially (volume, 0.05) gets quieter when lower pitch

    // Simple debug text
    fill(255);
    textSize(20);
    text("Distance: " + nf(d, 1, 1) + " cm", 20, 80);
    text("Frequency: " + floor(freq) + " Hz", 20, 110);
    text("Click to enable sound", 20, 140);
}

// REQUIRED for browser audio
function mousePressed() {
    if (!startedAudio) {
        userStartAudio();
        startedAudio = true;
    }
}

// DO NOT REMOVE
function connectBtnClick(e) {
    if (!port.opened()) {
        port.open(9600);
        e.target.innerHTML = "Disconnect Arduino";
    } else {
        port.close();
        e.target.innerHTML = "Connect to Arduino";
    }
}