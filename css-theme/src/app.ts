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

const usedDarkTheme = _ => {
  body.classList.remove('light');
  body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
};

const useLightTheme = _ => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};

const theme: string = localStorage.getItem('theme');

if (!theme && !body.classList.contains(theme))
  body.classList.add(theme);

dark.onclick = usedDarkTheme;
light.onclick = useLightTheme;
