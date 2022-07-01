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