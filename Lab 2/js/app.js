'use strict';

var answer1 = prompt('Yes or No, do I own a dog?').toLowerCase();

if (answer1 === 'yes') {
  alert('You answered ' + answer1 + ', which is corect! My wife owns a yorkie, just imagine the looks I get when I walk him.');
  console.log('User answered ' + answer1+ ', which is the correct answer.');
} else {
  alert('You answered ' + answer1 + ', you obviously, need to get to know me');
  console.log('User answered ' + answer1 + ', which is the incorrect answer');
}

var answer2 = prompt('Yes or No, do I like hockey?').toLowerCase();

if (answer2 === 'yes') {
  alert('You answered ' + answer2 + ', which is corect! GO BACKHAWKS!');
  console.log('User answered ' + answer2 + ', which is the correct answer.');
} else {
  alert('You answered ' + answer2 + ', I thought we were friends');
  console.log('User answered ' + answer2 + ', which is the incorrect answer');
}

var answer3 = prompt('Yes or No, do I play poker?').toLowerCase();

if (answer3 === 'yes') {
  alert('You answered ' + answer3 + ', which is not corect! I play blackjack.');
  console.log('User answered ' + answer3 + ', which is the correct answer.');
} else {
  alert('You answered ' + answer3 + ', which is correct, you must knew I was bluffing.');
  console.log('User answered ' + answer3 + ', which is the incorrect answer');
}

var answer4 = prompt('My last name is Lee, are my ancestor Chinese?').toLowerCase();

if (answer4 === 'yes') {
  alert('You answered ' + answer4 + ', which is not correct, you must need glasses!');
  console.log('User answered ' + answer4 + ', which is the correct answer.');
} else {
  alert('You answered ' + answer4 + ', which is correct, what were my ancestor thinking!');
  console.log('User answered ' + answer4 + ', which is the incorrect answer');
}

var answer5 = prompt('Was I born in New Orleans?').toLowerCase();

if (answer5 === 'yes') {
  alert('You answered ' + answer5 + ', which is no corect, I know I said GO BlACKHAWKS!');
  console.log('User answered ' + answer5 + ', which is the correct answer.');
} else {
  alert('You answered ' + answer5 + ', which is correct, but I did live there for a few years');
  console.log('User answered ' + answer5 + ', which is the incorrect answer');
}

function numberGuess() {
  var myNumber = 3;
  var attempts =  1;
  var userNumberGuess = prompt('How many pokemon did I catch this week?');

  while (attempts !== 4){
    if (userNumberGuess < myNumber){
      userNumberGuess = prompt('Low');
    } else if (userNumberGuess > myNumber){
      userNumberGuess = prompt('High');
    } else {
      alert('Right');
    }
    attempts++;
  }
}

numberGuess();

var favoriteColors = ['black', 'green', 'purple'];

var usersGuess = prompt('What are my favorite color?').toLowerCase();

console.log(favoriteColors);

// // if (
// //   usersGuess === favoriteColors[0] ||
// //   usersGuess === favoriteColors[1] ||
// //   usersGuess === favoriteColors[2]
// // ) {
// //   alert("yay");
// // } else {
// //   alert("boo");
// // }\

// // for (var tries = 0; tries < 3; tries++) {
// //   for (var i = 0; i < favoriteColors.length; i++) {
// //     if (usersGuess === myFavoriteColors[i]) {
// //       usersGuess = true;
// //       break;
// //     }
// //   }
// // }
for (var i = 0; i < favoriteColors.length; i++) {
  if (usersGuess === favoriteColors[i]) {
    usersGuess = true;
    break;
  }
}

if (usersGuess === true) {
  alert('You guessed one of my favorite colors');
} else {
  alert('You did not enter in a correct color');
}
