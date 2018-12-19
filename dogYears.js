/*
Dog Years
Dogs mature at a faster rate than human beings. We often say a dog's age can be calculated in "dog years" to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human's life equates to 45 years in a dog's life. How old would you be if you were a dog?

Here's how you convert your age from "human years" to "dog years":

The first two years of a dog's life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/

//creates variable myAge and sets it tu my current age
let myAge = 0;

//creates variable earlyYears
let earlyYears;

//checks if my age is equal or higer than 2, equal 0 or else, and takes action based on that
if (myAge >= 2) {
  earlyYearsDogs = 2;
} else if (myAge === 0) {
  earlyYearsDogs = 0;
} else {
  earlyYearsDogs = 2 - myAge;
}

//multiplies variable earlyYears by it's value in human years
let earlyYearsHumans = earlyYearsDogs * 10.5;

//creates varible laterYears and sets it to myAge - 2 (because of earlyYears)
let laterYears = myAge - earlyYearsDogs;

//multiplies variable laterYears by 4, because of equivalente humam years to dog's after the first 2 years
laterYears = laterYears * 4;

/*
console.log(earlyYears);
console.log(laterYears);
*/

//creats variable yAgeInDogYears and sets it to the total amount of dog years equivalent to my age 
let myAgeInDogYears = earlyYearsHumans + laterYears;

/*
console.log(myAgeInDogYears);
*/

//creats variable myName, sets it to Rogerio, and makes it lower case
let myName = 'Rogerio'.toLowerCase();

/*
console.log(myName)
*/

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)