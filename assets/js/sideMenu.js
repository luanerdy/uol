const wall = document.querySelector('.wall');
const menu = document.querySelector('.menu-container');

function hideMenu() {
    wall.classList.add('hidden');
    menu.classList.add('hidden');
}

function showMenu() {
    wall.classList.remove('hidden');
    menu.classList.remove('hidden');
}
