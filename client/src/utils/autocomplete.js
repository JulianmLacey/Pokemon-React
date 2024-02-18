
const inputEl = document.querySelector("#myInput");
const addPokemonButton = document.querySelector("#addPokemon");
const pokemonList = document.querySelector("#pokemonList");

inputEl.addEventListener("input", onInputChange);
addPokemonButton.addEventListener("click", onAddPokemon);

let pokeNames = [];

async function getPokemonNames() {
  const pokeRes = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await pokeRes.json();

  pokeNames = data.results.map((pokemon) => {
    return pokemon.name;
  });
}

async function onInputChange() {
    const value = inputEl.value.toLowerCase();
  
    if (value === "") {
      const autocompleteListWrapper = document.querySelector("#autocomplete-list-wrapper");
      autocompleteListWrapper.innerHTML = ""; 
      return;
    }
  
    const filteredNames = pokeNames.filter((pokeName) =>
      pokeName.substr(0, value.length).toLowerCase() === value
    );
  
    if (filteredNames.length === 1) {
      inputEl.value = filteredNames[0];
      const autocompleteListWrapper = document.querySelector("#autocomplete-list-wrapper");
      autocompleteListWrapper.innerHTML = ""; 
      return;
    }
  
    createAutocompleteDropdown(filteredNames);
  }
  
  

  function createAutocompleteDropdown(list) {
    const listEl = document.createElement("ul");
    listEl.className = "autocomplete-list";
  
    list.forEach((pokemon) => {
      const listItem = document.createElement("li");
      const pokemonButton = document.createElement("button");
      pokemonButton.innerHTML = pokemon;
      pokemonButton.addEventListener("click", function() {
        inputEl.value = pokemon;
        const autocompleteListWrapper = document.querySelector("#autocomplete-list-wrapper");
        autocompleteListWrapper.innerHTML = ""; 
      });
      listItem.appendChild(pokemonButton);
  
      listEl.appendChild(listItem);
    });
  
    const autocompleteListWrapper = document.querySelector("#autocomplete-list-wrapper");
    autocompleteListWrapper.innerHTML = ""; 
    autocompleteListWrapper.appendChild(listEl);
  }
  
function onAddPokemon() {
    const selectedPokemon = inputEl.value;
    if (selectedPokemon && !pokeNames.includes(selectedPokemon)) {
        const listItem = document.createElement("li");
        listItem.textContent = selectedPokemon;
        pokemonList.appendChild(listItem);
        pokeNames.push(selectedPokemon);
    }
}
  

getPokemonNames();
