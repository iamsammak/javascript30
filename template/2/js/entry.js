require('../css/styles.scss');

import Clock from './clock';

const deepDupElement = el => {
  let newEl = el.cloneNode();

  const children = Array.from( el.children );
  children.forEach( child => newEl.appendChild( deepDupElement( child ) ) );

  return newEl;
}

const addClock = options => {
  let element = deepDupElement(document.querySelector('#clock-template').children[0]);

  new Clock(element, options.timezone );

  if( options.label )
    element.querySelector('h3').innerHTML = options.label;

  document.querySelector('.clocks').appendChild(element);
}

window.addClock = addClock;

document.addEventListener('DOMContentLoaded', () => {

  const clocks = [
    {label: 'Local'},
    {label: 'Samoa', timezone: -11},
    {label: 'SF', timezone: -8},
    {label: 'SLC', timezone: -7},
    {label: 'Guatemala', timezone: -6},
    {label: 'NYC', timezone: -5},
    {label: 'UTC', timezone: 0},
    {label: 'Kosovo', timezone: +1},
    {label: 'Egypt', timezone: +2},
    {label: 'Cambodia', timezone: +7},
    {label: 'Beijing', timezone: +8},
    {label: 'Fiji', timezone: +12},
  ]

  clocks.forEach( options => addClock( options ) );
});
