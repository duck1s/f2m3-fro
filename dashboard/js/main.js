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


