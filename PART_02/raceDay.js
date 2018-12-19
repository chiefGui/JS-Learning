/*
Race Day
Codecademy's annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this: registration-timeline

Here's how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
*/
//creates variable raceNumber and sets it as a random number between 0 and 1000
let raceNumber = Math.floor(Math.random() * 1000);

//creates variable earlyRegster and sets it to boolean true
let earlyRegister = false;

//creates variable runnersAge and sets it to runners age
let runnersAge = 19;

//if runner registered early and is over 18, 1000 is added to its race number 
if (earlyRegister === true && runnersAge > 18) {
  raceNumber +=1000;
}

//informs racer its race number and time of running, if runner is exactly 18 tells him to see the registration desk.
if (earlyRegister === true && runnersAge > 18) {
  console.log(`Race Number: ${raceNumber}. Runs at: 9:30AM`)
} else if (earlyRegister !== true && runnersAge > 18) {
  console.log(`Race Number: ${raceNumber}. Runs at: 11:00AM`)
} else if (runnersAge < 18) {
  console.log(`Race Number: ${raceNumber}. Runs at: 12:30AM`)
} else {
  console.log('See the registration desk.')
}