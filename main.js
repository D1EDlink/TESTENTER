// Ссылки на элементы
const links = {
    main: document.querySelector('.main-link'),
    about: document.querySelector('.about-link'),
    skills: document.querySelector('.skills-link'),
    works: document.querySelector('.works-link'),
    comments: document.querySelector('.comments-link')
};

// Переменная для хранения текущей активной кнопки
let activeBtn = document.querySelector('.active');

// Обработчик клика на меню
document.querySelector(".fixed-menu").addEventListener('click', function(event) {
    let clickTarget = event.target;

    if (clickTarget.classList.contains('nav-link')) {
        // Если нажата другая кнопка, переключаем активный класс
        if (clickTarget !== activeBtn) {
            activeBtn.classList.remove('active');
            clickTarget.classList.add('active');
            activeBtn = clickTarget; // Обновляем ссылку на активную кнопку
        }
    }
});

// Обработчик события прокрутки
window.onscroll = function() {
    const h = document.documentElement.clientHeight;
    const scrollY = window.scrollY;

    // Определяем, какую ссылку нужно активировать
    let classLink = 'main';
    if (scrollY >= h * 4) classLink = 'comments';
    else if (scrollY >= h * 3) classLink = 'works';
    else if (scrollY >= h * 2) classLink = 'skills';
    else if (scrollY >= h) classLink = 'about';

    // Получаем новую активную ссылку
    const newActiveBtn = links[classLink];

    // Обновляем активный класс, если это необходимо
    if (activeBtn !== newActiveBtn) {
        activeBtn.classList.remove('active');
        newActiveBtn.classList.add('active');
        activeBtn = newActiveBtn; // Обновляем ссылку на активную кнопку
    }
};