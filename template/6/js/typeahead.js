import DataFilter from './data-filter';

class Typeahead {
  constructor( input, suggestions, dataOrEndpoint ) {
    this.el = input;
    this.suggestions = suggestions;
    this.data = new DataFilter( dataOrEndpoint );
    this.bindKeyups();
  }

  bindKeyups() {
    this.el.addEventListener('keyup', this.generateSuggestions.bind(this) );
  }

  generateSuggestions() {
    if( this.el.value )
      this.data.filter(this.el.value).then( cities => this.listCities(cities) );
    else
      this.showDefault();
  }

  listCities(cities) {
    this.clearList();

    if( cities.length )
      cities.forEach(city => this.addCity(city));
    else
      this.addItem('No matches...');
  }

  showDefault() {
    this.clearList();
    this.addItem('Filter For A City');
    this.addItem('Or A State');
  }

  clearList() {
    this.suggestions.innerHTML = '';
  }

  addItem(text) {
    const li = document.createElement('li');
    li.innerText = text;
    this.suggestions.appendChild(li);
    return li;
  }

  addCity(city) {
    const cityName = `${city.city}, ${city.state}`;
    const li = this.addItem(cityName);

    const regex = new RegExp(this.el.value, 'gi');

    const citySpan = document.createElement('span');
    citySpan.classList.add('name');
    citySpan.innerHTML = cityName.replace(regex, match => `<span class="hl">${match}</span>`);

    const populationSpan = document.createElement('span');
    populationSpan.classList.add('population');
    populationSpan.innerText = city.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    li.innerHTML = '';
    li.appendChild(citySpan);
    li.appendChild(populationSpan);

    li.style.cursor = 'pointer';
    li.addEventListener('click', () => {
      this.el.value = cityName;
      this.clearList();
      this.addCity(city);
    });
  }
}

export default Typeahead;
