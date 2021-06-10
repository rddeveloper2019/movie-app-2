const apiKey = process.env.REACT_APP_API_KEY;

class FetchService {
  constructor() {
    this._urlApi = 'https://www.omdbapi.com/?apikey=';
    this._apiKey = apiKey;
  }

  getFilmsByName = async (filmName, category) => {
    let selected;
    if (category === 'all') {
      selected = '';
    } else {
      selected = `&type=${category}`;
    }

    let response = await fetch(
      `http://www.omdbapi.com/?apikey=${this._apiKey}&s=${filmName}${selected}`
    );
    if (!response) {
      throw new Error('didnt fetch');
    }
    const res = await response.json();
    return await res.Search;
  };
}

export default FetchService;
