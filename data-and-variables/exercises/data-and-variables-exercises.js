// Declare and assign the variables below
let kilometersToMars=22505000;
let milesPerKilometer = 22505000 / 1.6;
const shuttleSpeedMph= 24600;
const shuttleName = "Chandrayan";

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof kilometersToMars);
console.log(typeof milesPerKilometer);

// Calculate a space mission below
let milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;

// Print the results of the space mission calculations below
console.log("Miles to Mars: "+milesToMars);
console.log("Hours to Mars: " +hoursToMars);

// Calculate a trip to the moon below
let daysToMars = hoursToMars / 24;

// Print the results of the trip to the moon below
console.log(shuttleName +" will take "+ daysToMars + " days to reach Mars.");