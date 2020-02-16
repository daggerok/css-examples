import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Roboto',
    ],
  },
});

setTimeout(() => {
  const body = document.body;
  const computedStyle = getComputedStyle(body);
  // we even access css variables via js:
  const siteBg = computedStyle.getPropertyValue('--site-bg');
  console.log('--site-bg:', siteBg);
  // and finally we can also change it's value:
  body.style.setProperty('--type-color', 'darkred')
}, 1000);

// see: https://www.youtube.com/watch?v=GZTZTZ69bqY
