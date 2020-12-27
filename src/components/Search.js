import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: '',
      addMovieVal: ''
    };

    this.searchChange = this.searchChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.addMovieChange = this.addMovieChange.bind(this);
    this.addMovieClick = this.addMovieClick.bind(this);
  }


  searchChange(event) {
    let value = event.target.value;
    this.setState({searchVal: value});
  }

  searchClick() {
    this.props.handleSearchClick(this.state.searchVal);
  }

  addMovieChange(event) {
    let value = event.target.value;
    this.setState({addMovieVal: value});
  }

  addMovieClick() {
    this.props.handleAddMovieClick(this.state.addMovieVal);
  }


  render() {
    return (
      <div>
        <div className="addMovies">
          <input
            id="addMoviesField"
            name="addMovies"
            type="text"
            placeholder="Add Movie Title Here"
            onChange={this.addMovieChange}
          ></input>
          <input
            id="addBtn"
            type="submit"
            value="Add"
            onClick={this.addMovieClick}
          ></input>
        </div>
        <div className="search">
          <div className="views">
            <input
              type="submit"
              value="Watched"
              className="watchedView"
              onClick={this.props.watchedView}
            ></input>
            <input
              type="submit"
              value="To Watch"
              className="toWatchView"
              onClick={this.props.toWatchView}
            ></input>
          </div>
          <div className="searchBar">
            <input
              id="searchField"
              name="searchMovies"
              type="text"
              placeholder="Search..."
              onChange={this.searchChange}
            ></input>
            <input
              id="searchBtn"
              type="submit"
              value="Go!"
              onClick={this.searchClick}
            ></input>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;