// functions
// keyword: function
// function name(parameter) { does something; optionally, "return value" }

// keyword functionName (parameter){command, i.e. work}
function triple(number){
    return number * 3;
}


console.log(triple(5))

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    greeting: function greet(){
        return `Hello, my name's ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    },
    haveBirthday: function(number){
        this.age += number;
    }
}
console.log(user.greeting());

/*
function add(a, b){
    console.log(this, 'this');
    return a + b;
}
add(); 
*/

const button = document.querySelector('button');
const colors = ['red', 'green', 'blue']
button.addEventListener('click', function WhatToDoWhenClick(){
    console.log(this, 'this');
    user.haveBirthday(1);
    document.querySelector('h1').innerHTML = user.greeting();
    document.querySelector('body').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

});

const birdImg = document.querySelector('img');
    birdImg.style.position = 'absolute';
    birdImg.style.top = '100px';
    let gravity = 0;

function gameLoop() {
    const birdTop = parseInt(birdImg.style.top);
    console.log(birdTop)
    console.log(birdImg.style.top)
    if (gravity < 8){
        gravity += 0.2;
    }
    birdImg.style.top = (birdTop + gravity) + 'px';
    requestAnimationFrame(gameLoop);
}
gameLoop();

document.addEventListener('click', function(){
    gravity = -8;
})