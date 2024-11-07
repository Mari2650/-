const burgerMenu = document.querySelector('.burger-menu'); 
const nav = document.querySelector('nav .menu'); 
const burgerBars = document.querySelectorAll('.burger-bar'); 

let isOpenMenu = false;

burgerMenu.addEventListener('click', function () {
    isOpenMenu = !isOpenMenu;
    toggleMenu();
});

function adaptiveMenuOpen() {
    burgerBars[0].style.transform = 'rotate(45deg) translateY(12.5px)';
    burgerBars[1].style.opacity = '0'; 
    burgerBars[2].style.transform = 'rotate(-45deg) translateY(-12.5px)';
}

function adaptiveMenuClose() {
    burgerBars[0].style.transform = 'rotate(0deg)'; 
    burgerBars[1].style.opacity = '1'; 
    burgerBars[2].style.transform = 'rotate(0deg)';
}

function showMobileMenu() {
    nav.classList.remove('menu'); 
    nav.classList.add('navigation-adaptive'); 
}

function hideMobileMenu() {
    nav.classList.remove('navigation-adaptive');
    nav.classList.add('menu');
}

function resetToDesktop() {
    hideMobileMenu(); 
    if (!isOpenMenu) {
        adaptiveMenuClose();
    }
}

window.addEventListener('resize', applyStyles);

function toggleMenu() {
    if (isOpenMenu) {
        adaptiveMenuOpen();
        showMobileMenu();
    } else {
        adaptiveMenuClose();
        hideMobileMenu();
    }
}
function applyStyles() {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop) {
        resetToDesktop();
    } else if (isOpenMenu) {
        adaptiveMenuOpen();  
        showMobileMenu();   
    }
}

