import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Roboto',
    ],
  },
});

import 'sal.js/dist/sal.css';
import sal from 'sal.js';

sal({
  threshold: 1,
  once: false,
});

// see: https://www.youtube.com/watch?v=6zGTxITQkN0&t=0s
