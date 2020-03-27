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
const body: HTMLElement = document.body;

dark.onclick = e => {
  body.classList.remove('light');
  body.classList.add('dark');
};

light.onclick = e => {
  body.classList.remove('dark');
  body.classList.add('light');
};
