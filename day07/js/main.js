/*
fetch ('https://pokeapi.co/api/v2/pokemon/pikachu').then(function(response){
    return response.json();                                     // handshake / response
}).then(function(data) {                                        // grabbing data
    console.log(data);                                          //logging the data
    return fetch(data.abilities[0].ability.url)                 //getting further info fetched, about the ability in this case
}).then(function(response) {
    console.log(response);
    return response.json();
}).then(function(data) {
    console.log(data)
})
*/

console.log(document);
console.dir(document);

