import React, { Component } from 'react';
class Search extends Component {
  state = {
    search: '',
    category: '',
    checked: 'all',
  };

  searchFunc = (e) => {
    this.setState({ search: e.target.value });
  };
  searchFilm = (e) => {
    if (e.key === 'Enter') {
      this.props.searchFilms(this.state.search, this.state.category);
    }
  };

  handleFilter = (category) => {
    this.setState({ category: category, checked: category }, () => {
      this.props.searchFilms(this.state.search, this.state.category);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="input-field">
            <input
              type="search"
              className="validate"
              placeholder="search"
              value={this.state.search}
              onChange={this.searchFunc}
              onKeyDown={this.searchFilm}
            />
            <button
              className="btn search-btn"
              onClick={() => {
                this.props.searchFilms(this.state.search, this.state.category);
              }}
            >
              Search
            </button>
          </div>
          <div>
            <label>
              <input
                name="category"
                type="radio"
                checked
                checked={this.state.checked === 'all'}
                onChange={() => {
                  this.handleFilter('all');
                }}
              />
              <span>All</span>
            </label>
            <label>
              <input
                name="category"
                type="radio"
                checked={this.state.checked === 'movie'}
                onChange={() => {
                  this.handleFilter('movie');
                }}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                name="category"
                type="radio"
                checked={this.state.checked === 'series'}
                onChange={() => {
                  this.handleFilter('series');
                }}
              />
              <span>Series</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
export { Search };
