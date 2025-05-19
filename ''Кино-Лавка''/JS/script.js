// ===== НАСТРОЙКА ТЕМЫ =====
const themeToggle = document.createElement('button');
themeToggle.id = 'theme-toggle';
themeToggle.innerHTML = '🌓';
document.body.appendChild(themeToggle);

let isDarkTheme = localStorage.getItem('theme') === 'dark';

function applyTheme() {
    const lightTheme = document.getElementById('light-theme');
    const darkTheme = document.getElementById('dark-theme');
    
    if (isDarkTheme) {
        lightTheme.disabled = true;
        darkTheme.disabled = false;
        themeToggle.textContent = '🌙';
    } else {
        lightTheme.disabled = false;
        darkTheme.disabled = true;
        themeToggle.textContent = '☀️';
    }
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    applyTheme();
}

// ===== ЗАЩИТА ОТ МАСШТАБИРОВАНИЯ =====
function preventScaling() {
    document.addEventListener('touchmove', function(e) {
        if (e.scale !== 1) e.preventDefault();
    }, { passive: false });

    document.addEventListener('wheel', function(e) {
        if (e.ctrlKey) e.preventDefault();
    }, { passive: false });

    document.addEventListener('contextmenu', (e) => e.preventDefault());
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    preventScaling();
    themeToggle.addEventListener('click', toggleTheme);
});