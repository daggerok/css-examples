import * as WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Roboto',
    ],
  },
});

const hello: HTMLHeadElement = document.createElement('h1');
hello.textContent = 'Hola!';
document.body.appendChild(hello);
