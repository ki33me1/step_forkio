const menu = document.querySelector('.menu');
const list = document.querySelector('.header-list');
const line = document.querySelectorAll('#mini-line');
const actMenu = document.querySelector('.prev');

menu.addEventListener('click', burgmenu);
function burgmenu() {
    list.classList.toggle('active-list');
    line.forEach(el => el.classList.toggle('active'));
    actMenu.classList.toggle('act');
}
if(menu.classList.contains('prev')){
    list.classList.remove('active-list');
    line.forEach(el => el.classList.remove('active'));
}