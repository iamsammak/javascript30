let fetching = false;

class DataFilter {
  constructor(data) {
    this.callbacks = [];
    this.getData(data);
  }

  cities(cb) {
    if( this.cityData ) {
      cb(this.cityData);
    } else {
      this.callbacks.push(cb);
    }
  }

  getData(data) {
    if( typeof data === "string" ) {
      this.cityData = [];

      if( !fetching ) {
        fetching = true;

        fetch(data)
          .then(response => response.json() )
          .then(data => this.cityData.push(...data))
          .then( () => {
            this.callbacks.forEach( cb => cb( this.cityData ) );
          });
      }
    } else {
      this.cityData = data;
    }
  }

  filter(text) {
    const re = new RegExp(text, 'i');

    return {
      then: cb => {
        this.cities( cities => {
          const filteredCities = cities.filter( city => city.city.match(re) || city.state.match(re) );
          cb( filteredCities );
        });
      }
    }
  }
}

export default DataFilter;
