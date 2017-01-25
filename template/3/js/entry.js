require('../css/styles.scss');

import Control from './control';

document.addEventListener('DOMContentLoaded', () => {
  new Control(document.getElementById('spacing'), 'spacing');
  new Control(document.getElementById('blur'), 'blur');
  new Control(document.getElementById('color'), 'base');
});
