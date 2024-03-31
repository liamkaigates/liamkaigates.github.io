function toggleMenu() {
    let menu = document.querySelector('.mobile-nav-link-list');
    let button = document.querySelector('.nav-button i');
    button.classList.toggle('fa-bars');
    button.classList.toggle('fa-times');
    menu.classList.toggle('open');
}

function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
}

document.body.classList.toggle('light-mode');
