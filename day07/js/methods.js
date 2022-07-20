// let myFunction = function() {}  // smallest function "meat on bones" you can have
function greetOtron() { // same thing!
console.log('hello!');
console.log('goodbye!');
return 'BAM DONE';
}

greetOtron();

let myAnswer = greetOtron();
console.log(myAnswer);

console.log('abc\'s are cool!'.toUpperCase().toLowerCase().split(' '));

console.log(Math.PI);
console.log(Math.random());

function randomizer(max) {
    return Math.floor((Math.random() * max) + 1)
};

console.log(randomizer(7));

const MyDate = new Date();
console.log(MyDate.getMilliseconds());
console.log((MyDate.getMonth()) + 1);

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
console.log(months[MyDate.getMonth()]);

MyDate.setFullYear(1990);

console.log(MyDate);

MyDate.setDate(MyDate.getDate() + 90);

console.log(MyDate);