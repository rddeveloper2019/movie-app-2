import React, { Component } from 'react';
import FetchService from '../services/fetchService';
import { Preloader } from '../components/Preloader';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';

class Main extends Component {
  state = {
    films: [],
    search: '',
    loading: true,
  };
  getFilms = new FetchService();

  componentDidMount() {
    this.getFilms.getFilmsByName('matrix', 'all').then((res) => {
      this.setState({ films: res, loading: false });
    });
  }
  componentDidUpdate(prevState) {
    // if (prevState.search === this.state.search) {
    //   return;
    // }
    // this.getFilms.getFilmsByName(this.state.search).then((res) => {
    //   this.setState({ films: res });
    // });
  }

  getFilmsByName = (name, category) => {
    this.setState({ loading: true });
    this.getFilms
      .getFilmsByName(name, category)
      .then((res) => {
        this.setState({ films: res, loading: false });
      })
      .catch((e) => {
        console.error(e);
        this.setState({ loading: false });
      });
  };

  render() {
    const { films, loading } = this.state;
    const movies = !loading ? <Movies films={films} /> : <Preloader />;
    return (
      <>
        <Search searchFilms={this.getFilmsByName} />
        <div>{movies}</div>
      </>
    );
  }
}
export { Main };
