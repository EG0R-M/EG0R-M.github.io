document.addEventListener('DOMContentLoaded', () => {
    // Общий код для обеих страниц
    const isDarkTheme = localStorage.getItem('theme') === 'dark';
    
    // Код для главной страницы (index.html)
    if (document.getElementById('carousel-track')) {
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

        // Обработка клика по карточке фильма
        function handleMovieCardClick(index) {
    if (currentIndex === index) {
        // Если кликнули на выбранную карточку - переход
        const movie = MovieType[index];
        localStorage.setItem('selectedMovie', JSON.stringify(movie));
        
        // Анимация перехода
        const clickedCard = cards[index];
        const cardClone = clickedCard.querySelector('img').cloneNode();
        cardClone.style.position = 'fixed';
        cardClone.style.width = clickedCard.offsetWidth + 'px';
        cardClone.style.height = clickedCard.offsetHeight + 'px';
        cardClone.style.top = clickedCard.getBoundingClientRect().top + 'px';
        cardClone.style.left = clickedCard.getBoundingClientRect().left + 'px';
        cardClone.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        cardClone.id = 'animated-card';
        document.body.appendChild(cardClone);
        
        setTimeout(() => {
            cardClone.style.width = '150px';
            cardClone.style.height = '225px';
            cardClone.style.top = '50%';
            cardClone.style.left = '50%';
            cardClone.style.transform = 'translate(-50%, -50%)';
            
            setTimeout(() => {
                const overlay = document.createElement('div');
                overlay.className = 'transition-overlay';
                overlay.style.backgroundColor = isDarkTheme ? '#1a1a1a' : '#f5f5f5';
                document.body.appendChild(overlay);
                
                setTimeout(() => {
                    overlay.style.top = '0';
                    setTimeout(() => {
                        window.location.href = 'movie.html';
                    }, 400);
                }, 50);
            }, 300);
        }, 10);
    } else {
        // Если кликнули на другую карточку - просто выбираем её
        selectMovie(index);
    }
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
                
                card.addEventListener('click', () => handleMovieCardClick(index));
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

        // Центрирование выбранной карточки
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
        if (cat) cat.addEventListener('click', meow);
        
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
    }

    // Код для страницы фильма (movie.html)
    if (document.querySelector('.movie-container')) {
        const movieData = JSON.parse(localStorage.getItem('selectedMovie'));
        const backButton = document.querySelector('.back-button');
        const overlay = document.querySelector('.transition-overlay');
        const content = document.querySelector('.movie-container');
        
        // Устанавливаем тему
        document.body.classList.add(isDarkTheme ? 'dark-theme' : 'light-theme');
        
        // Создаем анимированную карточку
        const animatedPoster = document.createElement('img');
        animatedPoster.className = 'movie-poster-animate';
        animatedPoster.src = movieData.imageUrl || 'images/posters/default.jpg';
        document.body.appendChild(animatedPoster);
        
        // Заполняем данные о фильме
        if (movieData) {
            document.getElementById('movie-poster').src = 
                movieData.imageUrl || 'images/posters/default.jpg';
            document.getElementById('movie-title').textContent = movieData.name;
            
            document.getElementById('movie-meta').innerHTML = `
                <p>${movieData.year} · ${movieData.director}</p>
                <p>${movieData.genres.join(', ')}</p>
            `;
            
            document.getElementById('movie-description').textContent = 
                movieData.description || 'Описание фильма отсутствует.';
        }
        
        // Запускаем анимацию входа
        setTimeout(() => {
            if (overlay) overlay.style.top = '0';
            
            setTimeout(() => {
                if (animatedPoster) animatedPoster.style.top = '20px';
                
                setTimeout(() => {
                    if (content) content.classList.add('visible');
                }, 300);
            }, 400);
        }, 50);
        
        // Обработчик кнопки "назад"
        if (backButton) {
            backButton.addEventListener('click', () => {
                if (content) {
                    content.classList.remove('visible');
                    content.classList.add('hiding');
                }
                
                if (animatedPoster) animatedPoster.classList.add('hiding');
                
                setTimeout(() => {
                    if (overlay) overlay.classList.add('hiding');
                    
                    setTimeout(() => {
                        window.history.back();
                    }, 400);
                }, 200);
            });
        }
    }
});