'use strict';
// Colton - Question 1!:
var name = prompt('What is your name?');
console.log('Hi ' + name);

// Colton - Question 2!:
var homeLocation = prompt('Am i from washington');
var normalizedHomeLocation = homeLocation.toLocaleLowerCase();
if (homeLocation === 'yes' || homeLocation === 'y') {
  //console.log('Yes! I live in Seattle')
  alert('Yes! I live in Seattle');
}
// console.log('Nice, ' + homeLocation + ' is great!');
// alert('It is nice to meet you ' + username + '. ' + homeLocation+ ' is a great place to hail from!');

// Colton - Question 3!:
var favoriteBeer = prompt('Do I like hazy beers?');
var normalizedFavoritebeer = favoriteBeer.toLocaleLowerCase
if(favoriteBeer === 'yes' || favoriteBeer === 'y')
//console.log('Yes! I like hazy beers');
alert('Yes! I like hazy beers');

// Colton - Question 4!:
var animalName = prompt('Is my dogs name Chanko?');
var normalizAnimalName = animalName.toLocaleLowerCase
if(animalName === 'no' || animalName === 'n');
//console.log('No! That is not his name!');
alert('No! That is not name!');
//alert('It is Nice to meet you ' + name + ', ' + homeLocation + ' Is a great place to hail from! ' + favoriteBeer + ' is a great choice' + ',' + ' i hope ' + animalName + ' is well behaved!'); 