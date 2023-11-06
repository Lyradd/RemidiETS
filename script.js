const cardsContainer = document.getElementById("cards-container");

async function fetchPokemonData() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    const data = await response.json();
    const results = data.results;

    results.forEach(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const pokemonData = await response.json();

      const card = document.createElement("div");
      card.classList.add("card", "col-md-2", "col-5");

      const name = document.createElement("h2");
      name.textContent =
        pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

      const detailButton = document.createElement("button");
      detailButton.textContent = "Detail";
      detailButton.classList.add("btn", "btn-primary", "btn-block");

      card.appendChild(name);
      card.appendChild(detailButton);
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchPokemonData();
