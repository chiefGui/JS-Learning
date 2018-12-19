/*
Rock, Paper, or Scissors

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there's a tie, then the game ends in a draw.
*/

//defines function getRandomChoice, wich generates a randon number between 0 and 2 and defines a pick based on that number
const getRandomChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  //defines function determineWinner, wich evaluates the winner based on the possible outcomes
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie.";
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper'){
        return 'Computer wins.';
      } 
      else {
        return 'User wins.';
      }
    } 
    else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins.';
      }
      else {
        return 'User wins.';
      }   
    }
    else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins.';
      }
      else {
        return 'User wins.';
      }
    }
  }
  
  //defines function playGame, wich plays the game using function getRandomChoice for defining pick for user and computer and then evaluates the result using function determineWinner
  const playGame = () => {
    const userChoice = getRandomChoice(); 
    console.log(`User's choice: ${userChoice}`); //prints user choice
    const computerChoice = getRandomChoice();
    console.log(`Computer's choice: ${computerChoice} \n`); // prints user choice and a blank line
    console.log(determineWinner(userChoice, computerChoice)); // prints winner
  }
  
  //runs function playGame
  playGame();