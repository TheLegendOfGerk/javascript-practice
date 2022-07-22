
const catFaxButton = document.createElement('button');
catFaxButton.innerHTML = "Click here for Cat Fax!";

catFaxButton.addEventListener('click', getRandomCatFact)

const BODY = document.querySelector('body');
BODY.appendChild(catFaxButton)

function getRandomCatFact() {
    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(metadata => { // This is the "hand shaken" data
        console.log(metadata) // you can name it whatever you want!
        return metadata.json()
    })
    .then(data => {
        console.log(data)
        const catFact = document.createElement('p')
        catFact.innerHTML = `Here's your cat fact! ${data.text}`
        BODY.append(catFact)})
}