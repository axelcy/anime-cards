// script.js
document.addEventListener('DOMContentLoaded', () => {
    const animeCardsContainer = document.getElementById('anime-cards');
    const changeCardsButton = document.getElementById('change-cards');
    const animeCountSlider = document.getElementById('anime-count');
    const animeCountValue = document.getElementById('anime-count-value');

    let animes = [];

    // Función para cargar los datos del JSON
    async function loadAnimes() {
        const response = await fetch('animes.json'); 
        const data = await response.json();
        animes = data.map(anime => {
            const { id, title, title_2, cover, mal_link, aired_year, difficulty, added, added2 } = anime;
            return { id, title, title_2, cover, mal_link, aired_year, difficulty, added, added2 };
        });
        showRandomAnimes();
    }

    // Función para mostrar 5 animes al azar
    function showRandomAnimes() {
        const animeCount = parseInt(animeCountSlider.value);
        animeCardsContainer.innerHTML = '';
        const randomAnimes = animes.sort(() => 0.5 - Math.random()).slice(0, animeCount);
        randomAnimes.forEach(anime => {
            console.log(anime);
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${anime.cover}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <p class="titulo2asd">${anime.title_2}</p>
                <p>Año: ${anime.aired_year}</p>
                <p>Dificultad: ${anime.difficulty}</p>
                <p>Agregado: ${anime.added}</p>
                <a href="${anime.mal_link}" target="_blank">Más información</a>
            `;
            animeCardsContainer.appendChild(card);
        });
    }

    // Evento para cambiar las tarjetas
    changeCardsButton.addEventListener('click', showRandomAnimes);
    
    // Evento para actualizar el valor del slider
    animeCountSlider.addEventListener('input', () => {
        animeCountValue.textContent = animeCountSlider.value;
    });
    // Cargar los animes al iniciar
    loadAnimes();
});