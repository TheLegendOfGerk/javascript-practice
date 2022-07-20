function getRandomCatFact() {
    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(metadata => { // This is the "hand shaken" data
        console.log(metadata) // you can name it whatever you want!
        return metadata.json()
    })
    .then(data => {
        console.log(data)
        alert(`Here's your cat fact! ${data.text}`)})
}

getRandomCatFact()