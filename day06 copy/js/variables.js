// variable keywords :var, let, const
// [declaration] [name] = value
const string = 'hello!';    // const is immutable, set in stone (scope notwithstanding)
let number = 10;            // let = mutable/changeable
var variable = true;        // var = identical to let but somewhat deprecated
// declare, assign
// const declares only once, can assign only once.
    // declaration also requires assignment, i.e. it can't be an empty declaration.
// let: declare only once, assign multiple times
// var: same usage as let but also persists in outer scope (e.g. inside of a function). very very rarely used

number = 20;

console.log('a' - 'b')      // NaN
console.log(1 + 1)          //  2
console.log(1 + 1 - 1 * 7)  // -5, per PEMDAS
console.log(Number('5.1'))
console.log('5.2' + 5)      // 5.25 - this is called concatenation
console.log(+'5.2' + 5)     // 10.2 - leading + turns it into a number
console.log('5' * 5)        // 25

let score = 0;
score += 5; // exapunks ADDI
score++; //same as "score = score +1" or "score += 1"