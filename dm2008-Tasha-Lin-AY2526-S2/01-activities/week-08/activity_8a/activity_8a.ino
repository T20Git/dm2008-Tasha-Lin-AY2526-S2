/*
  Blink

  Turns an LED on for one second, then off for one second, repeatedly.

  This example code is in the public domain.
  https://www.arduino.cc/en/Tutorial/BuiltInExamples/Blink
*/

int fadeLED = 9;      // PWM pin for fade control (~)
int blinkLED = 13;    // Digital pin for on/off blink
int brightness = 0;   // Current brightness level (0–255)
int fadeAmount = 5;   // How much to change brightness each frame

// the setup function runs once when you press reset or power the board
void setup() {
  // Set pins as outputs
  pinMode(fadeLED, OUTPUT);
  pinMode(blinkLED, OUTPUT);
}

// the loop function runs over and over again forever
	
void loop() {
   // Blink LED (digitalWrite)
  digitalWrite(blinkLED, HIGH);  // Turn on
  delay(100);                    // Wait 100ms
  digitalWrite(blinkLED, LOW);   // Turn off
  delay(100);                    // Wait 100ms
 
  // Fade LED (analogWrite)
  analogWrite(fadeLED, brightness);  // Set brightness (0–255)
  brightness += fadeAmount;          // Increase or decrease brightness
 
  // Reverse direction at brightness limits
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
 
  delay(30); // Small pause for smooth fading
}
