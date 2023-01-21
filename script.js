let openMenuIcon = document.querySelector('.menu-mobile');
let menu = document.querySelector('.menu-nav')
let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__link');

let openIcon = "/assets/images/icon-menu.svg";
let closeIcon = "/assets/images/icon-menu-close.svg"

openMenuIcon.addEventListener('click', () => {

    menu.classList.toggle('opened');

    body.classList.toggle('body-open');

    body.classList.toggle('fixed');

    links.forEach( (li) => {
        li.classList.toggle('white-link');
    });

    if(!menu.classList.contains('opened')) 
        changeIcon(openIcon);
    else 
        changeIcon(closeIcon);
    
});

function changeIcon(icon) {
    setTimeout(() => {
        document.querySelector('.menu-mobile').src = icon;
    }, 300);
}