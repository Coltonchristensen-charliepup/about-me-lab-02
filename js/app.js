'use strict';

function validUserInput(value) {
    //var valueLowerCase = value.toLowerCase();
    return (yesValue(value) || noValue(value));
}

function yesValue(value) {
    var valueLowerCase = value.toLowerCase();
    return (valueLowerCase === 'yes' || valueLowerCase === 'y');
}

function noValue(value) {
    var valueLowerCase = value.toLowerCase();
    return (valueLowerCase === 'no' || valueLowerCase === 'n');
}

function getUserInput(question) {
    var answer = prompt(question);
    if (validUserInput(answer)) {
        return answer;
    }
    var invalidAnswer = 'I only accept yes/no or y/n values';
    alert(invalidAnswer);
    3
    return getUserInput(question);
}
// Colton - Question 1!;
function questionOne(){
var userName = prompt('What is your name?!');
//console.log('userName: ', userName);
var myName = getUserInput('Is my name Colton?');
//console.log('myName', myName);
if (yesValue(myName)) {
    //console.log('Hi ' + myName);
    alert('Yes, that is my name');
}

// Colton - Question 2!:
var homeLocation = getUserInput('Am i from washington');
//console.log('homeLocation', homeLocation);
if (yesValue(homeLocation)) {
    alert('Yes! I live in Washington');
    //console.log('Yes! I live in Washington')
}


// Colton - Question 3!:
var favoriteBeer = getUserInput('Do I like hazy beers?');
//console.log('favoriteBeer',favoriteBeer);
if (yesValue(favoriteBeer)) {
    //console.log('Yes! I like hazy beers');
    alert('Yes! I like hazy beers');
}
// Colton - Question 4!:
var animalName = getUserInput('Is my dogs name Chanko?');
//console.log('animalName', animalName);
if (noValue(animalName)) {
    //console.log('No! That is not his name!');
    alert('No! That is not his name!');
}


// Colton - Question 5!:
var dragRace = getUserInput('Do I drag race?');
//console.log('dragRace', dragRace);
if (yesValue(dragRace)) {
    //console.log('Yes! I love drag racing!');
    alert('Yes! I love drag racing!');
}


// colton - Question 6!:

var countyGuesses = 0;
console.log(numberOfCounties);

while (countyGuesses < 6) {
    // var numberOfCounties = getUserInput('How many counties have i lived in? Answer the correct number.');

    //prompt('How many counties have i lived in? Answer the correct number.');
    var numberOfCounties = prompt('How many counties have i lived in? Answer the correct number.');
    if (isNaN(numberOfCounties)) {
        alert('enter a number!');
        continue
    }
    if (numberOfCounties > 3) {
        alert('try again, ' + userName + ', try agian')
    } else if (numberOfCounties < 3) {
        alert('try again, ' + userName + ', try again')
    } else if (numberOfCounties === '3') {

        countyGuesses = 6;
    }
    countyGuesses++;
}

// colton- Question 7!:
// he is still working on this question
// var attempts = 0;
// console.log(nameOfDogsInMyHouse);

// while (attempts < 6) {
    //     attempts++;
    //     var nameOfDogsInMyHouse = prompt('what are the names of the dogs in my house? Enter the correct name!').toUpperCase();
    //     if (nameOfDogsInMyHouse === array[0] || nameOfDogsInMyHouse === array[1]) {
        //         alert('Correct, ' + userName + ', names of dogs are Ganon and Charlie!');
//     }
//     attempts = 6;
//     correctAnser++;
//     break;

// if (nameOfDogsInMyHouse !== array[0] || nameOfDogsInMyHouse !== array[1]) {
    //     alert('again, ' + userName + ', try again')
    //     attempts++;
// }
// if (attempts === 6) {
//     alert('You are out guesses, ' + userName + '.  Click okay to finish.');
//     }
// }

alert('Thanks for playing ' + userName + '!');
}
// Thanks for playing userName!
//alert(`Hi ${userName}, this is template literal!`);

//still working on this question
questionOne();