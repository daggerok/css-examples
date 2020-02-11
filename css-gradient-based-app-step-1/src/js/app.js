import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      // 'Roboto:300,400,500,600,700',
      // 'Roboto:400,100,‌​100italic,300,300ita‌​lic,400italic,500,50‌​0italic,700,700itali‌​c,900italic,900',
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
  // menu.display = !menu || !menu.display || menu.display !== 'block' ? 'block' : 'none';
  menu.classList.toggle('active');
  e.preventDefault();
}

function onDomContentLoaded() {
  findImg().addEventListener('click', toggleMenu, false);
}

document.addEventListener('DOMContentLoaded', onDomContentLoaded, false);
