const pokemonImage = document.getElementById("js--pokemon-image");
const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let hasThrown = false;

const getPokemon = function() {
    let randomNumber = Math.floor(Math.random() * 151 + 1);
    let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (answer) {
        let i = 0;
        pokemon[i] = answer.types.name;
        kaas = answer.types[0].type.name;
        console.log(kaas);

        const labels = [
            "answer.types",
            "PC",
            "Nintendo 2DS",
            "Nintendo 3DS",
            "Nintendo Switch"
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: "Most played consoles in hours",
                data: labels,
            }]
        }

        const config = {
            type: 'doughnut',
            data: data,
        }
        const config2 = {
            type: 'bar',
            data: data,
        }

        new Chart(document.getElementById("js--chart-1"), config);
        new Chart(document.getElementById("js--chart-2"), config2);
    });
}

for (let i = 0; i < 10; i++) {
    getPokemon();
}