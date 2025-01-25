let timeRemaining = 5; // Время до переключения на английский язык
const timerElement = document.getElementById('time-remaining');

document.getElementById('lang-en').addEventListener('click', function() {
    // Устанавливаем активную кнопку
    setActiveButton('en');
    // Перенаправление на англоязычный сайт
    window.location.href = "https://example.com"; // Замените на нужный URL
});

document.getElementById('lang-ru').addEventListener('click', function() {
    // Устанавливаем активную кнопку
    setActiveButton('ru');
    // Перенаправление на русскоязычный сайт
    window.location.href = "https://example.ru"; // Замените на нужный URL
});

// Функция для установки активной кнопки
function setActiveButton(lang) {
    const buttons = document.querySelectorAll('.flag-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    if (lang === 'en') {
        document.getElementById('lang-en').classList.add('active');
    } else {
        document.getElementById('lang-ru').classList.add('active');
    }
}

// Таймер для автоматического переключения на английский язык
const countdownTimer = setInterval(function() {
    timeRemaining--;
    timerElement.textContent = timeRemaining;

    if (timeRemaining <= 0) {
        clearInterval(countdownTimer);
        setActiveButton('en');
        window.location.href = "https://example.com"; // Замените на нужный URL
    }
}, 1000); // 1000 миллисекунд = 1 секунда

