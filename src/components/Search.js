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
          <input name="addMovies" type="text" placeholder="Add Movie Title Here" onChange={this.addMovieChange}></input>
          <input type="submit" value="Add" onClick={this.addMovieClick}></input>
        </div>
        <div className="search">
          <input name="searchMovies" type="text" placeholder="Search..." onChange={this.searchChange}></input>
          <input type="submit" value="Go!" onClick={this.searchClick}></input>
        </div>
      </div>
    )
  }
}

export default Search;