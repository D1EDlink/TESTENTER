(function() {
    const links = {
        main: document.querySelector('.main-link'),
        about: document.querySelector('.about-link'),
        skills: document.querySelector('.skills-link'),
        works: document.querySelector('.works-link'),
        comments: document.querySelector('.comments-link')
    };

    let activeBtn = document.querySelector('.active');

    document.querySelector(".fixed-menu").addEventListener('click', function(event) {
        let clickTarget = event.target;

        if (clickTarget.classList.contains('nav-link')) {
            if (clickTarget !== activeBtn) {
                activeBtn.classList.remove('active');
                clickTarget.classList.add('active');
                activeBtn = clickTarget;
            }
        }
    });

    window.addEventListener('scroll', function() {
        const h = document.documentElement.clientHeight;
        const scrollY = window.scrollY;

        let classLink = 'main';
        if (scrollY >= h * 4) classLink = 'comments';
        else if (scrollY >= h * 3) classLink = 'works';
        else if (scrollY >= h * 2) classLink = 'skills';
        else if (scrollY >= h) classLink = 'about';

        const newActiveBtn = links[classLink];

        if (activeBtn !== newActiveBtn) {
            activeBtn.classList.remove('active');
            newActiveBtn.classList.add('active');
            activeBtn = newActiveBtn;
        }
    });
})();

(function () {
    const burgerButton = document.querySelector('.mobile-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.querySelector('body');

    burgerButton.addEventListener('click', () => {
        if (mobileMenu.classList.contains('hide')) {
            mobileMenu.classList.remove('hide');
            body.classList.add('off-scroll');
        } else {
            mobileMenu.classList.add('hide');
            body.classList.remove('off-scroll');
        }
    });

    const mobileLinks = document.querySelectorAll('.mobile-nav-links .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hide');
            body.classList.remove('off-scroll');
        });
    });
})();