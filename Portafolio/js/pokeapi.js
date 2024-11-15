let nombreTxt = document.getElementById("pokemon-name");
let typesList = document.getElementById("pokemon-types");
let image = document.getElementById("pokemon-image");


fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((pokemon) => {
        //console.log(pokemon.name);
        nombreTxt.innerText = pokemon.name;

        //console.log(pokemon.types);
        /*
        let lista = document.getElementById("ul");
        for (let i = 0; i < pokemon.type; i++) {
            const element = pokemon.types[i];
            
            let item = document.createElement("li");
            item.innerText = tipo.type.name;
            lista.appendChild(item);
        }
        typesList.appendChild(lista);
        */

        //console.log(pokemon.sprites.front_default);

        image.setAttribute("src", pokemon.sprites.front_default);
    })
    .catch((error) => console.error(error));