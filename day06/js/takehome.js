
    fetch('https://alexwohlbruck.github.io/cat-facts/docs/facts')
        .then(function(response) {
            return response.json();
    }).then(function(RelevantInfo){
        console.log(RelevantInfo);
        const img = document.createElement('img');
        img.src = RelevantInfo.sprites.front_default;
        document.body.appendChild(img);
        img.width = 400;
        const h1 = document.createElement('h1');
        h1.innerHTML = RelevantInfo.name
        document.body.appendChild(h1);
        const info = document.createElement('p');
        info.innerHTML = 'Weight: ' +  RelevantInfo.weight / 10 + ' kg<br>Height: ' + RelevantInfo.height * 10 + ' cm';
            document.body.appendChild(info);
    })
    
    getPokemon('pikachu');
    getPokemon('hitmonlee');
    getPokemon('paras');
    getPokemon('klefki');