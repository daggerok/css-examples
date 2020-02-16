// import 'popper.js';
import $ from 'jquery';
// const $ = window.$;
//
import 'bootstrap'; // bootstrap.js
//
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Raleway',
    ],
  },
});

$('p').fadeOut(0, () => {
  console.log('fade out should be done fast!');
  $('p').fadeIn(2000, () => {
    console.log('fade in complete.');
  })
});
