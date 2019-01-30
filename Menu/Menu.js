//Testing new event handlerr

const body = document.querySelector('body');
console.log(body);

const closeMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  //console.dir(e.target);
  menu.classList.remove('menu--open');
};

body.addEventListener('click', closeMenu);

const toggleMenu = e => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  e.stopPropagation();
};

const keepMenuOpen = e => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.add('menu--open');
  e.stopPropagation();
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
menu.addEventListener('click', keepMenuOpen);
