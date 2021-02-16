const btnham = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger_menu");

btnham.addEventListener('click' , () => {
    menu.classList.toggle("changed");
});
