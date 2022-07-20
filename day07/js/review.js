// document

// get elements

const button = document.querySelector('button'); // grabs the first button available

button.innerHTML ='click me';

const buttons = document.querySelectorAll('button'); // gets ALL buttons

buttons[1].innerHTML = 'click me too';

console.log(buttons);

// update elements' text or HTML

button.innerText = '<h1>click me</h1>';
buttons[1].innerHTML = '<h1>click me gigantically</h1>';

//add or remove classes
button.classList.add('active');
button.classList.remove('active');

//update elements style
button.style.backgroundColor = 'green';
button.style.color = 'black';
button.style.padding = '10px';
button.style.borderRadius = '10px';

// remove elements

button.remove();
buttons[1].remove();

// create elements
const newButton = document.createElement('button');
newButton.innerHTML = '<h1>click me</h1>';
newButton.classList.add('active');
newButton.style.backgroundColor = 'green';
newButton.style.color = 'white';

// append elements / move elements
document.body.append(newButton);

// add event listeners
newButton.addEventListener('click', function() {
        // create elements
    const newButton = document.createElement('button');
    newButton.innerHTML = array[index];
    index += 1;
 
    // control flow
    if (index === array.length)
            {index = 0;}
        console.log('index: ', index);

    newButton.classList.add('active');
    newButton.style.backgroundColor = 'green';
    newButton.style.color = 'white';

    // append elements / move elements
    document.body.append(newButton);
});

const string = 'string';
const number = 1;
const boolean = true;
const array = [1, 2, 3]
const object = {}

let index = 0;

const RightNow  = new Date();
RightNow.setHours(19)

if (new Date().getHours() >= 18) {
    console.log('good evening!');
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}

console.log(new Date().getHours());