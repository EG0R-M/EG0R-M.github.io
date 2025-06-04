// Фразы продавца
const sellerPhrases = {
    greetings: [
        "Неплохо у нас тут, да?",
        "Что-то интересует?",
        "Вам помочь?",
        "Добро пожаловать в нашу кинолавку!",
        "Какой фильм ищете сегодня?"
    ],
    recommendations: [
        "Вы смотрели {movie}?",
        "Не хотите ознакомиться с фильмом {movie}?",
        "Очень рекомендую {movie} - отличный выбор!",
        "{movie} - просто шедевр, советую!",
        "Как насчёт {movie}? Идеально для вечера!"
    ],
    weather: [
        "Сегодня на улице {weather} - самое время для кино!",
        "Погода сегодня: {weather}. Отличный повод остаться дома с фильмом!",
        "{weather} - идеальные условия для кинопросмотра!"
    ],
    random: [
        "Знаете ли вы, что первый киносеанс состоялся в 1895 году?",
        "У нас есть редкие коллекционные издания!",
        "Фильмы - это как книги, только с картинками и звуком",
        "Какой ваш любимый жанр?",
        "У нас сегодня специальные предложения!"
    ]
};

// Позы продавца
const sellerPoses = {
    light: [
        'seller_day_1.png',
        'seller_day_2.png',
        'seller_day_3.png',
        'seller_day_4.png',
        'seller_day_5.png'
    ],
    dark: [
        'seller_night_1.png',
        'seller_night_2.png',
        'seller_night_3.png',
        'seller_night_4.png',
        'seller_night_5.png'
    ]
};

let currentTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
let sellerTimer;
let isSpeaking = false;
let weatherData = "отличная погода";
const poseSound = new Audio('sound/poz.mp3');
poseSound.volume = 0.5;

// Инициализация продавца
function initSeller() {
    const sellerContainer = document.getElementById('seller-container');
    if (!sellerContainer) return;

    // Создаем элементы для продавца
    sellerContainer.innerHTML = `
        <div class="seller-image"></div>
        <div class="seller-speech-bubble"></div>
        <div class="seller-button-container">
            <img src="images/seller_button.png" alt="Поговорить" class="seller-button">
            <div class="seller-options">
                <button class="seller-option" data-action="phrase">Фраза</button>
                <button class="seller-option" data-action="recommend">Совет</button>
                <button class="seller-option" data-action="weather">Погода</button>
            </div>
        </div>
    `;

    // Устанавливаем начальную позу
    updateSellerPose(0);

    // Запускаем таймер для случайных фраз
    startSellerTimer();

    // Добавляем обработчики
    document.querySelector('.seller-button').addEventListener('click', toggleSellerOptions);
    document.querySelectorAll('.seller-option').forEach(option => {
        option.addEventListener('click', handleSellerOption);
    });

    // Обработчик клика по фону
    document.getElementById('background-layer').addEventListener('click', () => {
        if (isSpeaking) return;
        const greetings = sellerPhrases.greetings.slice(0, 3);
        const randomMessage = greetings[Math.floor(Math.random() * greetings.length)];
        showSellerMessage(randomMessage);
    });

    // Получаем прогноз погоды
    fetchWeather();
}

// Обновление позы продавца
function updateSellerPose(poseIndex) {
    const sellerImage = document.querySelector('.seller-image');
    if (!sellerImage) return;

    const poses = sellerPoses[currentTheme];
    if (poseIndex >= 0 && poseIndex < poses.length) {
        sellerImage.style.backgroundImage = `url('images/${poses[poseIndex]}')`;
        // Воспроизводим звук смены позы
        poseSound.currentTime = 0;
        poseSound.play().catch(e => console.log("Автовоспроизведение звука заблокировано"));
    }
}

// Показать фразу продавца
function showSellerMessage(message, duration = 3000) {
    if (isSpeaking) return;
    isSpeaking = true;

    const speechBubble = document.querySelector('.seller-speech-bubble');
    if (!speechBubble) return;

    // Выбираем случайную позу (кроме текущей)
    const currentPose = Math.floor(Math.random() * sellerPoses[currentTheme].length);
    updateSellerPose(currentPose);

    // Показываем сообщение
    speechBubble.textContent = message;
    speechBubble.style.opacity = '1';

    // Через duration миллисекунд скрываем сообщение и возвращаем стандартную позу
    setTimeout(() => {
        speechBubble.style.opacity = '0';
        updateSellerPose(0);
        isSpeaking = false;
    }, duration);
}

// Переключение опций продавца
function toggleSellerOptions() {
    const options = document.querySelector('.seller-options');
    options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
}

// Обработка выбора опции
function handleSellerOption(e) {
    const action = e.target.dataset.action;
    let message = '';
    
    switch(action) {
        case 'phrase':
            const randomMessages = sellerPhrases.random;
            message = randomMessages[Math.floor(Math.random() * randomMessages.length)];
            break;
            
        case 'recommend':
            const randomMovie = MovieType[Math.floor(Math.random() * MovieType.length)].name;
            const recommendations = sellerPhrases.recommendations;
            const recommendationTemplate = recommendations[Math.floor(Math.random() * recommendations.length)];
            message = recommendationTemplate.replace('{movie}', randomMovie);
            break;
            
        case 'weather':
            const weatherMessages = sellerPhrases.weather;
            const weatherTemplate = weatherMessages[Math.floor(Math.random() * weatherMessages.length)];
            message = weatherTemplate.replace('{weather}', weatherData);
            break;
    }
    
    showSellerMessage(message);
    toggleSellerOptions();
}

// Таймер для автоматических фраз
function startSellerTimer() {
    if (sellerTimer) clearTimeout(sellerTimer);

    const delay = 30000 + Math.random() * 30000;
    sellerTimer = setTimeout(() => {
        const messages = sellerPhrases.greetings.concat(sellerPhrases.random);
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        showSellerMessage(randomMessage);
        startSellerTimer();
    }, delay);
}

// Получение погоды через API
async function fetchWeather() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.62&current_weather=true');
        const data = await response.json();
        
        if (data.current_weather) {
            const temp = data.current_weather.temperature;
            weatherData = `${temp}°C`;
        }
    } catch (error) {
        console.error('Ошибка получения погоды:', error);
        weatherData = "отличная погода";
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initSeller);