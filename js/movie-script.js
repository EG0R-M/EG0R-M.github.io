document.addEventListener('DOMContentLoaded', () => {
    // Получаем данные о фильме
    const movieData = JSON.parse(localStorage.getItem('selectedMovie'));
    
    // Заполняем данные
    if (movieData) {
        // Постер
        const poster = document.querySelector('.movie-poster');
        poster.src = movieData.imageUrl || 'images/posters/default.jpg';
        poster.onerror = () => {
            poster.src = 'images/posters/default.jpg';
        };
        
        // Название
        document.getElementById('movie-title').textContent = movieData.name;
        
        // Мета-данные
        const meta = document.getElementById('movie-meta');
        meta.innerHTML = `
            <p>${movieData.year}</p>
            <p>${movieData.director}</p>
            <p>${movieData.genres.join(', ')}</p>
        `;
        
        // Рейтинги
        document.getElementById('kp-rating').textContent = movieData.kinopoisk || '-';
        document.getElementById('imdb-rating').textContent = movieData.imdb || '-';
        
        // Описание
        document.getElementById('movie-description').textContent = 
            movieData.description || 'Описание фильма отсутствует.';
        
        // Кнопка назад
        document.querySelector('.back-button').addEventListener('click', () => {
            window.history.back();
        });
    } else {
        // Если данные не загрузились
        document.body.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <h2>Фильм не найден</h2>
                <button onclick="window.history.back()">Вернуться назад</button>
            </div>
        `;
    }
});