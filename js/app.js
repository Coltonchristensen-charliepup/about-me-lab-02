'use strict';

function validUserInput(value){
  //var valueLowerCase = value.toLowerCase();
  return (yesValue(value) || noValue(value));
}
function yesValue(value){
  var valueLowerCase = value.toLowerCase();
  return (valueLowerCase === 'yes' || valueLowerCase === 'y');
}

function noValue(value){
  var valueLowerCase = value.toLowerCase();
  return (valueLowerCase === 'no' || valueLowerCase === 'n');
}

function getUserInput(question){
  var answer = prompt(question);
  if (validUserInput(answer)){
    return answer;
  }
  var invalidAnswer = 'I only accept yes/no or y/n values';
  alert(invalidAnswer);3
  return getUserInput(question);
}

var userName = prompt('What is your name?!');
//console.log('userName: ', userName);
var myName = getUserInput('Is my name Colton?');
//console.log('myName', myName);
if(yesValue(myName)){
//console.log('Hi ' + myName);
alert('Yes, that is my name');
}

// Colton - Question 2!:
var homeLocation = getUserInput('Am i from washington');
//console.log('homeLocation', homeLocation);
if (yesValue(homeLocation)){
alert('Yes! I live in Washington');
//console.log('Yes! I live in Washington')
}


// Colton - Question 3!:
var favoriteBeer = getUserInput('Do I like hazy beers?');
//console.log('favoriteBeer',favoriteBeer);
if(yesValue(favoriteBeer)){
//console.log('Yes! I like hazy beers');
alert('Yes! I like hazy beers');
}
// Colton - Question 4!:
var animalName = getUserInput('Is my dogs name Chanko?');
//console.log('animalName', animalName);
if (noValue(animalName)){
//console.log('No! That is not his name!');
alert('No! That is not his name!');
}


// Colton - Question 5!:
var dragRace = getUserInput('Do I drag race?');
//console.log('dragRace', dragRace);
if (yesValue(dragRace)){
//console.log('Yes! I love drag racing!');
alert('Yes! I love drag racing!');
}


// colton - Question 6!:

console.log(numberOfCounties);
var countyGuesses = 0;

while (countyGuesses < 6 ){
 // var numberOfCounties = getUserInput('How many counties have i lived in? Answer the correct number.');

  //prompt('How many counties have i lived in? Answer the correct number.');
  var numberOfCounties = prompt('How many counties have i lived in? Answer the correct number.');
  if (isNaN(numberOfCounties)){
    alert('enter a number!');
    continue
  }
  if (numberOfCounties > 3){
    alert('try again, ' + userName + ', try agian') 
  } else if(numberOfCounties < 3){
    alert('try again, ' + userName + ', try again')
  } else if (numberOfCounties === '3'){
    correctAnswer++;
    break;
  }
  countyGuesses++;
}

// colton- Question 7!:

console.log(numberOfTurbos);
var turboGuesses = 0;

while(turboGuesses < 12 ){
  
  var numberOfTurbos = prompt('How many turbos does my truck have? Answer the correct number');
  if (isNaN(numberOfTurbos)){
    alert('enter a number');
    continue
  }
  if (numberOfTurbos > 2){
    alert('try again, ' + userName + ', try again')
  }else if(numberOfTurbos < 2){
    alert('try again, ' + userName + ', try again')
  }else if(numberOfTurbos === '2'){
    correctAnswer++;
    break;
  }
}


alert('Thanks for playing ' + userName + '!');

// Thanks for playing userName!
//alert(`Hi ${userName}, this is template literal!`);

 