// Define menu, menu-button, and body constants
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const body = document.querySelector('body');

// Close menu when body is clicked
const closeMenu = () => {
  menu.classList.remove('menu--open');
};

// Body click event listener
body.addEventListener('click', closeMenu);

// Toggle the "menu--open" class on your menu refence.
const toggleMenu = (e) => {
  menu.classList.toggle('menu--open');
  e.stopPropagation();
};

// Keep menu open when the target is the menu itself
const keepMenuOpen = (e) => {
  menu.classList.add('menu--open');
  e.stopPropagation();
};

// Click handlers for the menu-button and menu
menuButton.addEventListener('click', toggleMenu);
menu.addEventListener('click', keepMenuOpen);
