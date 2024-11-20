let nombreTxt = document.getElementById("pokemon-name");
let typesList = document.getElementById("pokemon-types");
let image = document.getElementById("pokemon-image");
let specialAttackTxt = document.getElementById("pokemon-special-attack");
let weightTxt = document.getElementById("pokemon-weight");
let heightTxt = document.getElementById("pokemon-height");
let mainAbilityTxt = document.getElementById("pokemon-main-ability");
let abilitiesList = document.getElementById("pokemon-abilities");
let pokemonSound = document.getElementById("pokemon-sound");
let errorMessage = document.getElementById("error-message");
let form = document.getElementById("pokemon-search-form");
let searchInput = document.getElementById("pokemon-search");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu-rock-star")
  .then((response) => response.json())
  .then((pokemon) => {
    console.log(pokemon.name);
    nombreTxt.innerText = pokemon.name;

    console.log(pokemon.types);
    let lista = document.createElement("ul");
    for (let i = 0; i < pokemon.types.length; i++) {
      const tipo = pokemon.types[i];

      let item = document.createElement("li");
      item.innerText = tipo.type.name;
      lista.appendChild(item);
    }
    typesList.appendChild(lista);

    console.log(pokemon.sprites.front_default);
    image.setAttribute("src", pokemon.sprites.front_default);

    const specialAttack = pokemon.stats.find(
      (stat) => stat.stat.name === "special-attack"
    );
    specialAttackTxt.innerText = specialAttack.base_stat;

    weightTxt.innerText = `${pokemon.weight / 10} kg`;

    heightTxt.innerText = `${pokemon.height / 10} m`;

    mainAbilityTxt.innerText = pokemon.abilities[0]?.ability.name || "no aplica";

    let listaHabilidades = document.createElement("ul");
    pokemon.abilities.forEach((habilidad) => {
      let item = document.createElement("li");
      item.innerText = habilidad.ability.name;
      listaHabilidades.appendChild(item);
    });
    abilitiesList.appendChild(listaHabilidades);
  })
  .catch((error) => console.error(error));

//POKEAPI MEJORADA

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let pokemonName = searchInput.value.trim().toLowerCase();
  searchPokemon(pokemonName);
});

function searchPokemon(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`El Pokémon "${name}" no se encontró.`);
      }
      return response.json();
    })
    .then((pokemon) => {
      displayPokemon(pokemon);
    })
    .catch((error) => {
      clearInterface();
      errorMessage.innerText = error.message;
    });
}

function displayPokemon(pokemon) {
  nombreTxt.innerText = pokemon.name;

  typesList.innerHTML = "";
  let listaTipos = document.createElement("ul");
  pokemon.types.forEach((tipo) => {
    let item = document.createElement("li");
    item.innerText = tipo.type.name;
    listaTipos.appendChild(item);
  });
  typesList.appendChild(listaTipos);

  image.setAttribute("src", pokemon.sprites.front_default);

  abilitiesList.innerHTML = "";
  let listaHabilidades = document.createElement("ul");
  pokemon.abilities.forEach((habilidad) => {
    let item = document.createElement("li");
    item.innerText = habilidad.ability.name;
    listaHabilidades.appendChild(item);
  });

  let soundUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemon.name.toLowerCase()}.mp3`;
  pokemonSound.setAttribute("src", soundUrl);
  pokemonSound.hidden = false;
}

function clearInterface() {
  nombreTxt.innerText = "";
  typesList.innerHTML = "";
  image.setAttribute("src", "");
  abilitiesList.innerHTML = "";
  pokemonSound.setAttribute("src", "");
  pokemonSound.hidden = true;
}
