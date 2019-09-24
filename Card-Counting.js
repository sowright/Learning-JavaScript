/* 
Skills learned: defining functions, switch statements, increment operators, if/else statements, and string concatenation. 

Lesson link: learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/counting-cards

Prompt: 
Write a card counting function, which will:
  - receive a card parameter, which can be a number or a string.
  - increment or decrement the global count variable according to the card's value ({2,3,4,5,6} -> +1, {7,8,9} -> 0, {10,'J','Q','K'} -> -1).
  - return a string with the current count and the string 'Bet' if the count is positive, or 'Hold' if the count is zero or negative.
*/

// global count variable
var count = 0;

// define function
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
  
  if (count > 0){
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  
}

// test function.
cc(2); cc(3); cc(2); cc('K'); cc('A');
console.log(cc(8));
console.log(cc('Q'));

