async function getData() {
    try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const personnages = await response.json();

        const main = document.querySelector("main");

        for (const personnage of personnages) {
            let article = document.createElement("article");

            article.innerHTML = `
                <div class="${personnage.house.toLowerCase()}">
                    <img src="${personnage.image}" class="image_hover" alt="${personnage.name}">
                    <p style="color: var(--Gold, #b99049)"> "${personnage.name}" </p>
                </div>
            `;

            main.appendChild(article);
        };

    } catch (error) {
        alert("Erreur lors de la récupération des données: " + error);
    }
}

getData();
