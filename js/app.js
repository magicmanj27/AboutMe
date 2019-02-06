"use strict";

// myFiveQuestion();

numberGuess();

// colorGuess();

// function myFiveQuestion() {
//   var answer1 = prompt("Yes or No, do I own a dog?").toLowerCase();

//   if (answer1 === "yes") {
//     alert(
//       "You answered " +
//         answer1 +
//         ", which is corect! My wife owns a yorkie, just imagine the looks I get when I walk him."
//     );
//     console.log("User answered " + answer1 + ", which is the correct answer.");
//   } else {
//     alert(
//       "You answered " + answer1 + ", you obviously, need to get to know me"
//     );
//     console.log("User answered " + answer1 + ", which is the incorrect answer");
//   }

//   var answer2 = prompt("Yes or No, do I like hockey?").toLowerCase();

//   if (answer2 === "yes") {
//     alert("You answered " + answer2 + ", which is corect! GO BACKHAWKS!");
//     console.log("User answered " + answer2 + ", which is the correct answer.");
//   } else {
//     alert("You answered " + answer2 + ", I thought we were friends!");
//     console.log("User answered " + answer2 + ", which is the incorrect answer");
//   }

//   var answer3 = prompt("Yes or No, do I play poker?").toLowerCase();

//   if (answer3 === "yes") {
//     alert(
//       "You answered " + answer3 + ", which is not corect! I play blackjack!"
//     );
//     console.log("User answered " + answer3 + ", which is the correct answer.");
//   } else {
//     alert(
//       "You answered " +
//         answer3 +
//         ", which is correct, you must knew I was bluffing!"
//     );
//     console.log("User answered " + answer3 + ", which is the incorrect answer");
//   }

//   var answer4 = prompt(
//     "Yes or No, My last name is Lee, are my ancestor Chinese?"
//   ).toLowerCase();

//   if (answer4 === "yes") {
//     alert(
//       "You answered " +
//         answer4 +
//         ", which is not correct, you must need glasses!"
//     );
//     console.log("User answered " + answer4 + ", which is the correct answer.");
//   } else {
//     alert(
//       "You answered " +
//         answer4 +
//         ", which is correct, what were my ancestor thinking!"
//     );
//     console.log("User answered " + answer4 + ", which is the incorrect answer");
//   }

//   var answer5 = prompt("Yes or No, was I born in New Orleans?").toLowerCase();

//   if (answer5 === "yes") {
//     alert(
//       "You answered " +
//         answer5 +
//         ", which is no corect, I know I said GO BlACKHAWKS!"
//     );
//     console.log("User answered " + answer5 + ", which is the correct answer.");
//   } else {
//     alert(
//       "You answered " +
//         answer5 +
//         ", which is correct, but I did live there for a few years!"
//     );
//     console.log("User answered " + answer5 + ", which is the incorrect answer");
//   }
// }

function numberGuess() {
  var myNumber = 3;
  // var tryAmount = 4;
  var attempts = 1;
  var guess = false;
  var userNumberGuess = prompt("With 4 attempts, can you guess how many pokemons I caught this week?");

  for (var i = 0; i < 4; i++) {
    console.log(userNumberGuess);
    if (userNumberGuess < myNumber) {
      console.log(userNumberGuess);
      userNumberGuess = prompt("You entered the number: " + userNumberGuess + ", to LOW!");
      attempts++;
    } else if (userNumberGuess > myNumber) {
      console.log(userNumberGuess);
      userNumberGuess = prompt("You entered the number: " + userNumberGuess + ", to HIGH!");
      attempts++;
    } else {
      console.log(userNumberGuess);
      guess = true;
      break;
    }
  }
  if (guess === true) {
    alert('You entered the number: ' +  userNumberGuess + ', which is the correct answer, GREAT JOB!');
    alert("It took you " + attempts + " attempts to guess correctly!");
  } else {
    alert('You ran out of attempts, better luck next time!');
  }
}

// function colorGuess() {
//   var favoriteColors = ['black', 'green', 'purple'];

//   var usersGuess = prompt('Can you guess one of my favorites?').toLowerCase();

//   console.log(favoriteColors);

//   // // if (
//   // //   usersGuess === favoriteColors[0] ||
//   // //   usersGuess === favoriteColors[1] ||
//   // //   usersGuess === favoriteColors[2]
//   // // ) {
//   // //   alert("yay");
//   // // } else {
//   // //   alert("boo");
//   // // }

//   for (var i = 0; i < favoriteColors.length; i++) {
//     if (usersGuess === favoriteColors[i]) {
//       usersGuess = true;
//       break;
//     }
//   }

//   if (usersGuess === true) {
//     alert('You guessed one of my favorite colors!');
//   } else {
//     alert('You did not enter in a correct color!');
//   }
// }
