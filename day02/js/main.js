// comment: one line comment

/*
this is a multi-line comment, open with slash asterisk, end with asterisk slash
*/ 

// variables
yes = true; //boolean
no = false;
Yes = 10; // case sensitivity, different from yes, yeS, YES, et cetera


myname = 'Gerk';

const favfood = 'Pizza';
let favmovies = ['Hot Fuzz', 'Stranger Than Fiction',
'Scott Pilgrim vs. \' the World', 'Survive Style 5 Plus']

const gradiusThree = {
    developer: 'Konami',
    year: '1991',
    genre: 'shooting game',
    platform: ['arcade', 'SNES'],
}

count = 0; // number 
one = 1;
two = 2;
three = 3;

console.log(yes, Yes, one, two);

title = 'Helloooo World'; // string

console.log(myname, favfood);

console.log(gradiusThree);

document.querySelector('h1').innerHTML = title;
document.querySelector('p').innerHTML = count;

//boolean is yes/no or true/false questions
//numbers are numbers
//strings, usually formated 'Like this!', are custom text
//organizational data types:
  //array, ['like this', 'this', 'this'] is for multiples! (cue Gradius III announcer)
  //{groups}
  //array = [1, 2, 3, 4, 5] | list = [1, 2, 3, 4, 5]

// operators!
// = is assignment
// += addition assignment

/* Arithmetic examples
1 + 1
1 - 1
1 * 1
1 / 1
1 % 1
*/

let score = 10

console.log(score + 6);

console.log("hello " + "world");
console.log('don\'t do it!');

console.log('It looks like \\ but I\'m actually typing \\\\.');

console.log('5px' + '5px'); //aw rats, didn't work

let Fiven = 5n; //This "n" determines this will be a numeric integer, instead of worrying about decimals. Javascript can go to 19 decimal places normally.

console.log(Fiven / 3n);

const unique1 = Symbol('unique');
const unique2 = Symbol('unique');

console.log(unique2 === unique1, 'unique'); // unique symbols, even though they *appear* the same, do not actually equal one another. Symbol is the unique identifier

console.log('Your score is ' + score + '. That\'s the highest yet!');

console.log(`My score is ${score}`); //use tildes for "advanced strings"!

console.log(gradiusThree.year);

console.log('Supercalifragelisticexpialadocious'.length)