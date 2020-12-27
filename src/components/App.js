import React from 'react';
import MovieList from './MovieList.js';
import '../main.css';
import Search from './Search.js';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: movies,
      searchedMovies: movies,
      errorMessage: "noErrorMessage"
    };

    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
  }

  handleSearchClick(searchValue) {
    searchValue = searchValue.toLowerCase();
    let searchMatches = [];

    for (var movie of this.state.allMovies) {
      if ((movie.title.toLowerCase()).indexOf(searchValue) > -1) {
        searchMatches.push(movie);
      }
    }

    if (searchMatches.length === 0) {
      this.setState({
        searchedMovies: searchMatches,
        errorMessage: "errorMessage"
      })
    } else {
      this.setState({
        searchedMovies: searchMatches,
        errorMessage: "noErrorMessage"
      })
    }
  }

  handleAddMovieClick(movie) {
    let movies = this.state.allMovies;
    let newMovie = {title: movie};
    movies.push(newMovie);
    this.setState({
      allMovies: movies,
      searchedMovies: movies
    });
  }

  render(){
    return(
    <div>
      <h1>Movie List</h1>
      <div>
        <Search
          handleSearchClick={this.handleSearchClick}
          handleAddMovieClick={this.handleAddMovieClick}
        />
      </div>
      <div>
        <div className={this.state.errorMessage}>
          Oops! No movies were found matching your search criteria.
        </div>
        <MovieList
          movies={this.state.searchedMovies}
        />
      </div>
    </div>
  )}
}

export default App;
