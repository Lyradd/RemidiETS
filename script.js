const cardsContainer = document.getElementById("cards-container");

async function fetchPokemonData() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    const data = await response.json();
    const pokemon = data.results;
    let info = "";

    pokemon.forEach((p) => {
      info += `
        <div class="col-md-3 col-sm-6 my-sm-3 mb-4">
          <div class="card shadow" style="width: auto; border: 1px solid blue;">
            <div class="card-body">
              <h5 class="card-title text-capitalize">${p.name}</h5>
              <a href="${p.url}" class="btn btn-primary">Detail</a>
            </div>
          </div>
        </div>
        `;
    });

    cardsContainer.innerHTML = info;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchPokemonData();
