async function getData() {
    const pokedex = await fetch("https://hp-api.onrender.com/api/characters")
        .then((response) => response.json())
        .catch((error) => alert("Erreur : " + error));
    