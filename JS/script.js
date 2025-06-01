document.addEventListener('DOMContentLoaded', () => {
    // Конфигурация звуков
    const soundConfig = {
        catSounds: [
            'sound/meow-1.mp3',
            'sound/meow-2.mp3',
            'sound/meow-3.mp3',
            'sound/meow-4.mp3'
        ],
        dayTheme: 'sound/day-theme.mp3',
        nightTheme: 'sound/night-theme.mp3'
    };

    // Глобальные переменные
    const isDarkTheme = localStorage.getItem('theme') === 'dark';
    let currentIndex = 0;
    let cards = [];
    let backgroundMusic = null;
    let isMusicOn = true;

    // Добавляем элементы управления звуком
    const musicControlsHTML = `
        <div class="music-controls">
            <button id="music-toggle">🔊</button>
            <input type="range" id="volume-control" min="0" max="1" step="0.1" value="0.5">
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', musicControlsHTML);

    // Функция воспроизведения случайного звука кота
    function playRandomCatSound() {
        const randomSound = soundConfig.catSounds[Math.floor(Math.random() * soundConfig.catSounds.length)];
        const audio = new Audio(randomSound);
        audio.volume = 0.5;
        audio.play().catch(e => console.error("Ошибка воспроизведения:", e));
    }

    // Инициализация фоновой музыки
    function initBackgroundMusic(track) {
        if (backgroundMusic) {
            backgroundMusic.pause();
            backgroundMusic = null;
        }

        backgroundMusic = new Audio(track);
        backgroundMusic.volume = 0.5;
        backgroundMusic.loop = true;
        backgroundMusic.muted = !isMusicOn;

        setTimeout(() => {
            backgroundMusic.play().catch(e => console.log("Автовоспроизведение заблокировано:", e));
        }, 10000);
    }

    // Код для главной страницы
    if (document.getElementById('carousel-track')) {
        // Получаем элементы DOM
        const track = document.getElementById('carousel-track');
        const prevBtn = document.querySelector('.carousel-nav.prev');
        const nextBtn = document.querySelector('.carousel-nav.next');
        const movieTitle = document.getElementById('movie-title');
        const movieDetails = document.getElementById('movie-details');
        const themeToggle = document.getElementById('theme-toggle');
        const lightTheme = document.getElementById('light-theme');
        const darkTheme = document.getElementById('dark-theme');
        const musicToggle = document.getElementById('music-toggle');
        const volumeControl = document.getElementById('volume-control');

        // Создаем кота
        const cat = document.createElement('div');
        cat.id = 'cat';
        document.body.appendChild(cat);

        // Создаем элемент диска
        const disk = document.createElement('div');
        disk.className = 'disk';
        disk.innerHTML = '<img src="images/disk.gif" alt="Disk" onerror="this.style.display=\'none\'">';
        document.querySelector('.carousel-container').appendChild(disk);

        // Применение темы
        function applyTheme() {
            if (isDarkTheme) {
                lightTheme.disabled = true;
                darkTheme.disabled = false;
                themeToggle.textContent = '🌙';
                if (cat) cat.style.display = 'none';
                initBackgroundMusic(soundConfig.nightTheme);
            } else {
                lightTheme.disabled = false;
                darkTheme.disabled = true;
                themeToggle.textContent = '☀️';
                if (cat) cat.style.display = 'block';
                initBackgroundMusic(soundConfig.dayTheme);
            }
        }

        // Переключение темы
        function toggleTheme() {
            const newTheme = !isDarkTheme;
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            location.reload();
        }

        // Обработка клика по карточке
        function handleMovieCardClick(index) {
            if (currentIndex === index) {
                const movie = MovieType[index];
                localStorage.setItem('selectedMovie', JSON.stringify(movie));
                animateTransitionToMoviePage(cards[index]);
            } else {
                selectMovie(index);
            }
        }

        // Анимация перехода на страницу фильма
        function animateTransitionToMoviePage(clickedCard) {
            const cardClone = clickedCard.querySelector('img').cloneNode();
            cardClone.style.position = 'fixed';
            cardClone.style.width = clickedCard.offsetWidth + 'px';
            cardClone.style.height = clickedCard.offsetHeight + 'px';
            cardClone.style.top = clickedCard.getBoundingClientRect().top + 'px';
            cardClone.style.left = clickedCard.getBoundingClientRect().left + 'px';
            cardClone.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            cardClone.id = 'animated-card';
            document.body.appendChild(cardClone);
            
            // Скрываем диск при переходе
            const disk = document.querySelector('.disk');
            if (disk) disk.style.display = 'none';
            
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
            
            // Обновляем позицию диска
            updateDiskPosition();
            centerSelectedCard();
        }

        // Обновление позиции диска
        function updateDiskPosition() {
            const disk = document.querySelector('.disk');
            if (!disk) return;
            
            const card = cards[currentIndex];
            const cardRect = card.getBoundingClientRect();
            const containerRect = document.querySelector('.carousel-container').getBoundingClientRect();
            
            disk.style.display = 'block';
            disk.style.left = `${cardRect.right - containerRect.left + 10}px`;
            disk.style.top = `${cardRect.top - containerRect.top + cardRect.height/2 - 25}px`;
        }

        // Центрирование выбранной карточки
        function centerSelectedCard() {
            const card = cards[currentIndex];
            const cardRect = card.getBoundingClientRect();
            const trackRect = track.getBoundingClientRect();
            const centerOffset = trackRect.width / 2 - cardRect.width / 2;
            const cardOffset = cardRect.left - trackRect.left;
            
            track.style.transform = `translateX(${centerOffset - cardOffset}px)`;
            
            // Обновляем позицию диска после анимации
            setTimeout(updateDiskPosition, 500);
        }

        // Навигация по карусели
        function moveCarousel(direction) {
            const disk = document.querySelector('.disk');
            if (disk) disk.style.display = 'none';
            
            let newIndex;
            if (direction === 'prev') {
                newIndex = (currentIndex - 1 + MovieType.length) % MovieType.length;
            } else {
                newIndex = (currentIndex + 1) % MovieType.length;
            }
            
            selectMovie(newIndex);
        }

        // Обработчики событий
        prevBtn.addEventListener('click', () => moveCarousel('prev'));
        nextBtn.addEventListener('click', () => moveCarousel('next'));
        themeToggle.addEventListener('click', toggleTheme);
        if (cat) cat.addEventListener('click', playRandomCatSound);
        
        musicToggle.addEventListener('click', () => {
            isMusicOn = !isMusicOn;
            musicToggle.textContent = isMusicOn ? '🔊' : '🔇';
            if (backgroundMusic) backgroundMusic.muted = !isMusicOn;
        });

        volumeControl.addEventListener('input', (e) => {
            if (backgroundMusic) backgroundMusic.volume = e.target.value;
        });

        document.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY > 0) moveCarousel('next');
            else moveCarousel('prev');
        }, { passive: false });

        // Обработчик изменения размера окна
        window.addEventListener('resize', () => {
            centerSelectedCard();
            updateDiskPosition();
        });

        // Инициализация
        applyTheme();
        initCarousel();
    }

    // Код для страницы фильма (остаётся без изменений)
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