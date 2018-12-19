/*
Sleep Debt Calculator

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don't sleep enough, we accumulate sleep debt. In this project we'll calculate if you're getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

//creates function getSleepHours, wich gets entries of sleeping hours for each day of the week
const getSleepHours = (day) => {
    if (day === 'monday') {
      return 7;
    }
    else if (day = 'tuesday') {
      return 8;
    }
    else if (day = 'wednesday') {
      return 9;
    }
    else if (day = 'thursday') {
      return 10;
    }
    else if (day = 'friday') {
      return 6;
    }
    else if (day = 'saturday') {
      return 11;
    }
    else if (day = 'sunday') {
      return 12;
    }
  };
  
  //creates function getActualSleepHours wich sums the total sleeping hours in a week using getSleepHours function
  const getActualSleepHours = () => {
    return getSleepHours('monday') + 	
      getSleepHours('tuesday') + 
      getSleepHours('wednesday') + 		
      getSleepHours('thursday') + 
      getSleepHours('friday') + 
      getSleepHours('saturday') + 
      getSleepHours('sunday')
  };
  
  //creates function getIdealSleepHours wich defines ideal sleeping hours for a day and then multiplies it by 7 to get results for a whole week
  const getIdealSleepHours = () => {
    const idealHours = 9;
    return idealHours * 7;
  };
  
  // creates calculateSleepDebt, wich analyses sleep debt, and prints results for user.
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours(); //takes actual sleep hours
    const idealSleepHours = getIdealSleepHours(); //takes ideal sleep hours
    const difHours = Math.abs(actualSleepHours - idealSleepHours) //calculates sleep debt
    
    //prints entry results followed by a blank line
    console.log(`Actual sleep hours: ${actualSleepHours}`);
    console.log(`Ideal sleep hours: ${idealSleepHours} \n`);
    
    //analyses and prints debt results
    if (actualSleepHours === idealSleepHours) {
      console.log('User got the perfect amount of sleep.');
    }
    else if (actualSleepHours > idealSleepHours)
      console.log(`User got ${difHours} more hours of sleep than needed.`);
    else if (actualSleepHours < idealSleepHours)
      console.log(`User should get ${difHours} more hours of rest.`);
  };
    
  //runs function calculateSleepDebt
  calculateSleepDebt();