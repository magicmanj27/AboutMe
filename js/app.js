"use strict";

var myFavoriteColors = ["black", "green", "purple"];

console.log(myFavoriteColors);

var guessMyFavoriteColor = prompt("What are my favorite color?");

for (var i = 0; i < myFavoriteColors.length; i++) {
  if (guessMyFavoriteColor === myFavoriteColors[i]) {
    alert("you guessed one of my favorite colors");
  } else {
    alert("Blah");
  }
}
