const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 151 + 1);
const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let hasThrown = false;

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        pokemonImage.src = data.sprites.front_shiny;

        catchButton.onclick = function () {
            let catchNumber = Math.floor(Math.random() * 2);
            if (hasThrown === false) {
                if (catchNumber === 1) {
                    pokemonText.innerText = "Pokemon caught!";
                    hasThrown = true
                } else {
                    pokemonText.innerText = "Pokemon has fled.";
                    hasThrown = true
                }
            }
            
        }
    });

const boysTitle = document.getElementById("js--boys-title");
const boysText = document.getElementById("js--boys-text");
let boys = fetch("https://api.tvmaze.com/search/shows?q=the%20boys")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const kaas = data[1]
        console.log(kaas);
        boysTitle.innerText = kaas.show.name;
        boysText.innerText = kaas.show.summary;
    });


