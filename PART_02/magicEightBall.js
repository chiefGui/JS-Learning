/*
Magic Eight Ball

You've learned a powerful tool in JavaScript: control flow! It's so powerful, in fact, that it can be used to tell someone's fortune.

In this project we will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.
*/
 
 //creates variable userName and sets it to an empty string
 let userName = '';

 //decides how to greet based on habing a name or not at userName
 userName ? 
       console.log(`Hello, ${userName}!`) : console.log('Hello!');
 
 //creates variable user question and sets it to the question user wants to aks 
 let userQuestion = 'Will I learn JS?';
 
 //prints userQuestion
 console.log(userQuestion);
 
 //creates variable randomNumber and sets it to an integer between 0 and 7
 let randomNumber = Math.floor(Math.random()*8);
 
 //creates variable eightBall and sets it to an empty string
 let eigthBall = '';
 
 //sets an answer for eigthBall based on randomNumber
 switch (randomNumber){
   case 0:
     eigthBall = 'It is certain';
     break;
   case 1:
     eigthBall = 'It is decidedly so';
     break;
   case 2:
     eigthBall = 'Reply hazy try again';
     break;
   case 3:
     eigthBall = 'Cannot predict now';
     break;
   case 4:
     eigthBall = 'Do not count on it';
     break;
   case 5:
     eigthBall = 'My sources say no';
     break;
   case 6:
     eigthBall = 'Outlook not so good';
     break;
   case 7:
     eigthBall = 'Signs point to yes';
     break;
 }
 
 //prints eightBall answer
 console.log(eigthBall)