//Run this code first and examine the error message.
//Pay close attention to any line numbers mentioned in the message - these will help locate and repair the mistake in the code.

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000 || launchReady === true) {
   console.log('Fuel level cleared.');
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}