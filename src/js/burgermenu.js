const menu = document.querySelector('.menu');
const list = document.querySelector('.header-list');
const line = document.querySelectorAll('#mini-line');

menu.addEventListener('click', burgmenu);
function burgmenu(){
    list.classList.toggle('active-list');
    line.forEach(el => el.classList.toggle('active'));
}