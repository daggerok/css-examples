import * as WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Roboto',
    ],
  },
});

const light: HTMLLinkElement = document.querySelector('#light');
const dark: HTMLLinkElement = document.querySelector('#dark');

const theme = localStorage.getItem('theme');
const body: HTMLElement = document.body;
body.classList.add(theme ? theme : 'dark');

dark.onclick = e => {
  body.classList.remove('light');
  body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
};

light.onclick = e => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};
