let openMenuIcon = document.querySelector('.menu-mobile');
let menu = document.querySelector('.menu-nav')
let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__link');


openMenuIcon.addEventListener('click', () => {
    menu.classList.toggle('opened');

    body.classList.toggle('body-open');

    if(!menu.classList.contains('opened')) {

        links.forEach( (li) => {
            li.classList.remove('white-link');
        });
        
        body.classList.remove('fixed');
        
        setTimeout(() => {
            document.querySelector('.menu-mobile').src = "/assets/images/icon-menu.svg";
        }, 300);
        
    } else {
        
        links.forEach( (li) => {
            li.classList.add('white-link');
        });

        body.classList.add('fixed');

        setTimeout(() => {
            document.querySelector('.menu-mobile').src = "/assets/images/icon-menu-close.svg";
        }, 300);
    }

});