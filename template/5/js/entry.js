require('../css/styles.scss');

import Gallery from './gallery';
import Panel from './panel';

document.addEventListener('DOMContentLoaded', () => {
  const images = [
    ['Hey Let\'s Dance', 'https://source.unsplash.com/gYl-UtwNg_I/1500x1500'],
    ['Give Take Receive', 'https://source.unsplash.com/1CD3fd8kHnE/1500x1500'],
    ['Experience It Today', 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d'],
    ['Give All You can', 'https://source.unsplash.com/ITjiVXcwVng/1500x1500'],
    ['Life In Motion', 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500'],
    ['Right Now Is Good', 'https://images.unsplash.com/photo-1454991727061-be514eae86f7?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=']
  ];

  const gallery = new Gallery(document.querySelector('.panels'));

  images.forEach( image => new Panel(...image, gallery) );
});
