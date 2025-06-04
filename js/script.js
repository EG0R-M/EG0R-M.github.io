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
    let isDarkTheme = localStorage.getItem('theme') === 'dark';
    let currentIndex = 0;
    let cards = [];
    let isMusicOn = localStorage.getItem('musicEnabled') === 'true' || false;
    let backgroundMusic = new Audio();

    // Функция воспроизведения случайного звука кота
    function playRandomCatSound() {
        const randomSound = soundConfig.catSounds[Math.floor(Math.random() * soundConfig.catSounds.length)];
        const audio = new Audio(randomSound);
        audio.volume = 0.5;
        audio.play().catch(e => console.error("Ошибка воспроизведения:", e));
    }

    // Поиск фильмов
    function initSearch() {
        const searchInput = document.getElementById('movie-search');
        const searchButton = document.getElementById('search-btn');
        
        if (!searchInput || !searchButton) return;
        
        function performSearch() {
            const query = searchInput.value.toLowerCase();
            if (!query) {
                initCarousel();
                return;
            }
            
            const results = MovieType.filter(movie => 
                movie.name.toLowerCase().includes(query) ||
                movie.director.toLowerCase().includes(query) ||
                movie.genres.some(genre => genre.toLowerCase().includes(query))
            );
            
            if (results.length > 0) {
                showFilteredResults(results);
                if (typeof showSellerMessage === 'function') {
                    showSellerMessage("Вот что я нашёл:");
                }
            } else if (typeof showSellerMessage === 'function') {
                showSellerMessage("Ничего не найдено, попробуйте другой запрос");
            }
        }
        
        function showFilteredResults(filteredMovies) {
            const track = document.getElementById('carousel-track');
            if (!track) return;
            
            track.innerHTML = '';
            cards = [];
            
            filteredMovies.forEach((movie, index) => {
                const originalIndex = MovieType.findIndex(m => m.id === movie.id);
                const card = document.createElement('div');
                card.className = 'movie-card';
                card.dataset.index = originalIndex;
                
                card.innerHTML = `
                    <img src="${movie.imageUrl || 'images/posters/default.jpg'}" 
                         alt="${movie.name}" 
                         onerror="this.src='images/posters/default.jpg'">
                `;
                
                card.addEventListener('click', () => handleMovieCardClick(originalIndex));
                track.appendChild(card);
                cards.push(card);
            });
            
            if (cards.length > 0) {
                selectMovie(0);
            }
        }
        
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }

    // Переключение темы
    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
        applyTheme();
    
        
        // Анимация кнопки
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    themeToggle.style.transform = 'scale(1)';
                    applyTheme();
                }, 150);
            }, 150);
        } else {
            applyTheme();
        }
    }

    // Применение темы
    function applyTheme() {
        const lightTheme = document.getElementById('light-theme');
        const darkTheme = document.getElementById('dark-theme');
        const themeToggle = document.getElementById('theme-toggle');
        const cat = document.getElementById('cat');
    
        if (isDarkTheme) {
            lightTheme.disabled = true;
            darkTheme.disabled = false;
            if (themeToggle) themeToggle.innerHTML = '<img src="images/icons/theme_toggle.png" alt="🌙">';
            if (cat) {
                cat.style.display = 'block';
                cat.style.backgroundImage = "url('images/background/cat_night.gif')";
            }
        } else {
            lightTheme.disabled = false;
            darkTheme.disabled = true;
            if (themeToggle) themeToggle.innerHTML = '<img src="images/icons/theme_toggle.png" alt="☀️">';
            if (cat) {
                cat.style.display = 'block';
                cat.style.backgroundImage = "url('images/background/cat_day.gif')";
            }
        }
    
        if (typeof updateSellerTheme === 'function') {
            updateSellerTheme(isDarkTheme ? 'dark' : 'light');
        }
        if (isMusicOn && backgroundMusic.src) {
            const newTrack = isDarkTheme ? soundConfig.nightTheme : soundConfig.dayTheme;
            if (backgroundMusic.src !== newTrack) {
                backgroundMusic.src = newTrack;
                backgroundMusic.play().catch(e => console.log("Ошибка воспроизведения:", e));
            }
        }
    }

    /* Музыка темы */
    function toggleMusic() {
        isMusicOn = !isMusicOn;
        localStorage.setItem('musicEnabled', isMusicOn);
        
        const musicToggle = document.getElementById('music-toggle-btn');
        if (musicToggle) {
            musicToggle.textContent = isMusicOn ? '🔊' : '🔇';
        }
    
        if (isMusicOn) {
            const track = isDarkTheme ? soundConfig.nightTheme : soundConfig.dayTheme;
            if (backgroundMusic.src && backgroundMusic.src !== track) {
                // Плавное затухание перед сменой трека
                const fadeOut = setInterval(() => {
                    backgroundMusic.volume = Math.max(0, backgroundMusic.volume - 0.1);
                    if (backgroundMusic.volume <= 0) {
                        clearInterval(fadeOut);
                        backgroundMusic.src = track;
                        backgroundMusic.loop = true;
                        backgroundMusic.volume = document.getElementById('volume-slider')?.value || 0.5;
                        backgroundMusic.play().catch(e => console.log("Автовоспроизведение заблокировано:", e));
                    }
                }, 50);
            } else {
                backgroundMusic.src = track;
                backgroundMusic.loop = true;
                backgroundMusic.volume = document.getElementById('volume-slider')?.value || 0.5;
                backgroundMusic.play().catch(e => console.log("Автовоспроизведение заблокировано:", e));
            }
        } else {
            backgroundMusic.pause();
        }
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
        const musicToggle = document.getElementById('music-toggle-btn');
        const volumeControl = document.getElementById('volume-slider');

        // Создаем кота
        const cat = document.createElement('div');
        cat.id = 'cat';
        document.body.appendChild(cat);

        // Создаем элемент диска
        const disk = document.createElement('div');
        disk.className = 'disk';
        disk.innerHTML = '<img src="images/icons/disk.gif" alt="Disk" onerror="this.style.display=\'none\'">';
        document.querySelector('.carousel-container').appendChild(disk);

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
            document.getElementById('movie-title-container').textContent = movie.name;
            
            // Обновляем детали только для десктопов
            if (window.innerWidth >= 768) {
                document.getElementById('movie-details').innerHTML = `
                    <p>${movie.year} · ${movie.director}</p>
                    <p>${movie.genres.join(', ')}</p>
                `;
            }
            
            updateDiskPosition();
            centerSelectedCard();
        }

        // Обновление позиции диска
        function updateDiskPosition(isInitial = false) {
            const disk = document.querySelector('.disk');
            if (!disk) return;
        
            const container = document.querySelector('.carousel-container');
            const containerRect = container.getBoundingClientRect();
            
            if (window.innerWidth <= 767) {
                // Мобильная версия - диск внизу
                const diskHeight = 80; // Высота диска на мобильных
                const finalBottom = 20; // Отступ от низа
                
                disk.style.width = `${diskHeight}px`;
                disk.style.height = `${diskHeight}px`;
                
                if (isInitial) {
                    disk.style.transition = 'none';
                    disk.style.left = `${containerRect.width / 2 - diskHeight/2}px`;
                    disk.style.bottom = `${finalBottom}px`;
                    disk.style.top = 'auto';
                    disk.style.display = 'block';
                } else {
                    disk.style.transition = 'transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)';
                    disk.style.left = `${containerRect.width / 2 - diskHeight/2}px`;
                    disk.style.bottom = `${finalBottom}px`;
                    disk.style.top = 'auto';
                    disk.style.display = 'block';
                    disk.style.transform = 'translateY(150px)';
                    
                    setTimeout(() => {
                        disk.style.transform = 'translateY(0)';
                    }, 10);
                }
            } else {
                // Десктоп версия - стандартное поведение
                const centerY = containerRect.height / 2;
                const finalTop = centerY - 100 - 50;
                
                disk.style.width = '100px';
                disk.style.height = '100px';
                
                if (isInitial) {
                    disk.style.transition = 'none';
                    disk.style.left = `${containerRect.width / 2 - 50}px`;
                    disk.style.top = `${finalTop}px`;
                    disk.style.display = 'block';
                } else {
                    disk.style.transition = 'transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)';
                    disk.style.left = `${containerRect.width / 2 - 50}px`;
                    disk.style.top = `${finalTop}px`;
                    disk.style.display = 'block';
                    disk.style.transform = 'translateY(-200px)';
                    
                    setTimeout(() => {
                        disk.style.transform = 'translateY(0)';
                    }, 10);
                }
            }
        }

        // Центрирование выбранной карточки
        function centerSelectedCard() {
            const card = cards[currentIndex];
            const cardRect = card.getBoundingClientRect();
            const trackRect = track.getBoundingClientRect();
            const centerOffset = trackRect.width / 2 - cardRect.width / 2;
            const cardOffset = cardRect.left - trackRect.left;
            
            track.style.transform = `translateX(${centerOffset - cardOffset}px)`;
            
            // Для мобильных - небольшая задержка перед анимацией диска
            setTimeout(() => {
                updateDiskPosition();
            }, window.innerWidth <= 767 ? 100 : 500);
        }

        // Навигация по карусели
        function moveCarousel(direction) {
            const disk = document.querySelector('.disk');
            if (disk) {
                disk.style.transform = 'translateY(200px)'; // Сразу "прячем" вниз
            }
        
            let newIndex;
            if (direction === 'prev') {
                newIndex = (currentIndex - 1 + MovieType.length) % MovieType.length;
            } else {
                newIndex = (currentIndex + 1) % MovieType.length;
            }
        
            selectMovie(newIndex); // Вызовет updateDiskPosition()
        }

        // Обработчики событий
        prevBtn.addEventListener('click', () => moveCarousel('prev'));
        nextBtn.addEventListener('click', () => moveCarousel('next'));
        if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
        if (cat) cat.addEventListener('click', playRandomCatSound);
        
        if (musicToggle) {
            musicToggle.addEventListener('click', toggleMusic);
        }

        if (volumeControl) {
            volumeControl.addEventListener('input', (e) => {
                backgroundMusic.volume = e.target.value;
                if (isMusicOn && backgroundMusic.paused) {
                    backgroundMusic.play().catch(e => console.log("Ошибка воспроизведения:", e));
                }
            });
        }

        document.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY > 0) moveCarousel('next');
            else moveCarousel('prev');
        }, { passive: false });

        window.addEventListener('resize', () => {
            centerSelectedCard();
            updateDiskPosition();
        });

        // Инициализация
        applyTheme();
        initCarousel();
        initSearch();
    }

    // Код для страницы фильма
    if (document.querySelector('.movie-container')) {
        const movieData = JSON.parse(localStorage.getItem('selectedMovie'));
        const backButton = document.querySelector('.back-button');
        const content = document.querySelector('.movie-container');
        const musicToggle = document.getElementById('music-toggle-btn');
        const volumeControl = document.getElementById('volume-slider');
        
        // Устанавливаем тему
        document.body.classList.add(isDarkTheme ? 'dark-theme' : 'light-theme');
        
        // Создаем и добавляем постер
        const moviePoster = document.createElement('img');
        moviePoster.className = 'movie-poster movie-poster-animate';
        moviePoster.src = movieData.imageUrl || 'images/posters/default.jpg';
        moviePoster.alt = movieData.name;
        
        const movieHeader = document.querySelector('.movie-header');
        movieHeader.insertBefore(moviePoster, movieHeader.firstChild);
        
        // Заполняем данные о фильме
        if (movieData) {
            document.getElementById('movie-title').textContent = movieData.name;
            
            document.getElementById('movie-meta').innerHTML = `
                <p>${movieData.year}</p>
                <p>${movieData.director}</p>
                <p>${movieData.genres.join(', ')}</p>
            `;
            
            document.getElementById('kp-rating').textContent = movieData.kinopoisk || '-';
            document.getElementById('imdb-rating').textContent = movieData.imdb || '-';
    
            document.getElementById('movie-description').textContent = 
                movieData.description || 'Описание фильма отсутствует.';
        }
        
        // Анимация входа
        setTimeout(() => {
            moviePoster.style.opacity = '0';
            moviePoster.style.transform = 'translateY(20px)';
            moviePoster.style.transition = 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
            
            setTimeout(() => {
                moviePoster.style.opacity = '1';
                moviePoster.style.transform = 'translateY(0)';
            }, 50);
            
            if (content) {
                content.style.opacity = '0';
                content.style.display = 'grid';
                setTimeout(() => {
                    content.style.opacity = '1';
                }, 300);
            }
            
            const musicControls = document.querySelector('.music-controls');
            if (musicControls) {
                musicControls.style.opacity = '0';
                musicControls.style.transform = 'translateY(-20px)';
                musicControls.style.transition = 'all 0.5s ease-out 0.3s';
                setTimeout(() => {
                    musicControls.style.opacity = '1';
                    musicControls.style.transform = 'translateY(0)';
                }, 50);
            }
        }, 50);
        
        // Обработчик кнопки "назад"
        if (backButton) {
            backButton.addEventListener('click', () => {
                if (content) {
                    content.style.transition = 'opacity 0.4s ease';
                    content.style.opacity = '0';
                }
                
                const animatedPoster = document.querySelector('.movie-poster-animate');
                if (animatedPoster) {
                    animatedPoster.style.transition = 'all 0.5s ease';
                    animatedPoster.style.opacity = '0';
                    animatedPoster.style.transform = 'translateY(-50%) translateX(100px)';
                }
                
                const musicControls = document.querySelector('.music-controls');
                if (musicControls) {
                    musicControls.style.transition = 'all 0.3s ease';
                    musicControls.style.opacity = '0';
                    musicControls.style.transform = 'translateY(-20px)';
                }
                
                setTimeout(() => {
                    window.history.back();
                }, 500);
            });
        }
        
        // Инициализация музыки
        if (musicToggle) {
            musicToggle.textContent = isMusicOn ? '🔊' : '🔇'; // Устанавливаем начальное состояние
            musicToggle.addEventListener('click', toggleMusic);
        }
        
        if (volumeControl && backgroundMusic) {
            volumeControl.addEventListener('input', (e) => {
                backgroundMusic.volume = e.target.value;
            });
        }
        window.addEventListener('resize', () => {
            centerSelectedCard();
            updateDiskPosition();
            
            // Обновляем отображение информации в зависимости от размера экрана
            if (window.innerWidth < 768) {
                document.getElementById('movie-details').innerHTML = '';
                // Скрываем продавца при переходе на мобильный вид
                const sellerContainer = document.getElementById('seller-container');
                if (sellerContainer) sellerContainer.style.display = 'none';
            } else {
                const movie = MovieType[currentIndex];
                document.getElementById('movie-details').innerHTML = `
                    <p>${movie.year} · ${movie.director}</p>
                    <p>${movie.genres.join(', ')}</p>
                `;
                // Показываем продавца при переходе на десктопный вид
                const sellerContainer = document.getElementById('seller-container');
                if (sellerContainer) sellerContainer.style.display = 'flex';
            }
        });
    }
});