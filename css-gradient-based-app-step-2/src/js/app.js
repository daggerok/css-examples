import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Montserrat&display=swap',
    ],
  },
});

function $(selector) {
  return document.querySelector(selector);
}

function findMenu() {
  return $('aside nav ul');
}

function findImg() {
  return $('img');
}

function toggleMenu(e) {
  const menu = findMenu();
  menu.classList.toggle('active');
  e.preventDefault();
}

function onDomContentLoaded() {
  findImg().addEventListener('click', toggleMenu, false);
}

document.addEventListener('DOMContentLoaded', onDomContentLoaded, false);
