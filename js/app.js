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
  var invalidAnswer = 'I only accept yes/no or y/n values.';
  alert(invalidAnswer);
  return getUserInput(question);
}



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