document.addEventListener('DOMContentLoaded', () => {
    // Элементы карусели
    const track = document.getElementById('carousel-track');
    const prevBtn = document.querySelector('.carousel-nav.prev');
    const nextBtn = document.querySelector('.carousel-nav.next');
    const movieTitle = document.getElementById('movie-title');
    const movieDetails = document.getElementById('movie-details');
    
    // Элементы темы
    const themeToggle = document.getElementById('theme-toggle');
    const lightTheme = document.getElementById('light-theme');
    const darkTheme = document.getElementById('dark-theme');
    
    // Котик
    const cat = document.createElement('div');
    cat.id = 'cat';
    document.body.appendChild(cat);

    let currentIndex = 0;
    let cards = [];
    let isDarkTheme = localStorage.getItem('theme') === 'dark';

    // Инициализация темы
    function applyTheme() {
        if (isDarkTheme) {
            lightTheme.disabled = true;
            darkTheme.disabled = false;
            themeToggle.textContent = '🌙';
            cat.style.display = 'none';
        } else {
            lightTheme.disabled = false;
            darkTheme.disabled = true;
            themeToggle.textContent = '☀️';
            cat.style.display = 'block';
        }
    }

    // Переключение темы
    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
        applyTheme();
    }

    // Инициализация карусели
    function initCarousel() {
        track.innerHTML = '';
        cards = [];
        
        MovieType.forEach((movie, index) => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.dataset.index = index;
            
            card.innerHTML = `
                <img src="${movie.imageUrl || 'images/posters/default.jpg'}" 
                     alt="${movie.name}" 
                     onerror="this.src='images/posters/default.jpg'">
            `;
            
            card.addEventListener('click', () => selectMovie(index));
            track.appendChild(card);
            cards.push(card);
        });
        
        selectMovie(0);
    }

    // Выбор фильма
    function selectMovie(index) {
        currentIndex = index;
        cards.forEach(card => card.classList.remove('selected'));
        cards[index].classList.add('selected');
        
        const movie = MovieType[index];
        movieTitle.textContent = movie.name;
        movieDetails.innerHTML = `
            <p>${movie.year} · ${movie.director}</p>
            <p>${movie.genres.join(', ')}</p>
        `;
        
        centerSelectedCard();
    }

    // Центрирование выбранной карточки (исправленная версия)
    function centerSelectedCard() {
        const cardWidth = 120;
        const cardMargin = 15;
        const visibleCards = 4;
        const offset = (currentIndex * (cardWidth + cardMargin * 2)) - 
                      ((visibleCards / 2) * (cardWidth + cardMargin * 2));
        
        track.style.transform = `translateX(-${offset}px)`;
    }

    // Навигация
    function moveCarousel(direction) {
        let newIndex;
        if (direction === 'prev') {
            newIndex = (currentIndex - 1 + MovieType.length) % MovieType.length;
        } else {
            newIndex = (currentIndex + 1) % MovieType.length;
        }
        selectMovie(newIndex);
    }

    // Мяуканье котика
    function meow() {
        const audio = new Audio('sound/meow.mp3');
        audio.play().catch(e => console.log("Не удалось воспроизвести звук:", e));
    }

    // Обработчики событий
    prevBtn.addEventListener('click', () => moveCarousel('prev'));
    nextBtn.addEventListener('click', () => moveCarousel('next'));
    themeToggle.addEventListener('click', toggleTheme);
    cat.addEventListener('click', meow);
    
    document.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            moveCarousel('next');
        } else {
            moveCarousel('prev');
        }
    }, { passive: false });

    // Инициализация
    applyTheme();
    initCarousel();
});