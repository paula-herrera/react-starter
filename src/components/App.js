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
      allMovies: [],
      searchedMovies: [],
      errorMessage: "noErrorMessage",
      selectedMovie: ''
    };

    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.watchedView = this.watchedView.bind(this);
    this.toWatchView = this.toWatchView.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
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
        errorMessage: "noErrorMessage",
        selectedMovie: ''
      })
    }
  }

  handleAddMovieClick(movie) {
    let movies = this.state.allMovies;
    for (var film of movies) {
      if (film.title === movie) {
        alert('This movie has already been added');
        return;
      }
    }
    let newMovie = {
      title: movie,
      watched: false
    };
    movies.push(newMovie);
    this.setState({
      allMovies: movies,
      searchedMovies: movies,
      errorMessage: "noErrorMessage",
      selectedMovie: ''
    });
  }

  toggleWatched(event) {
    let movies = this.state.allMovies;
    for (var movie of movies) {
      if (movie.title === event.target.name) {
        movie.watched = !movie.watched;
      }
    }
    this.setState({
      allMovies: movies,
      errorMessage: "noErrorMessage"
    })
  }

  watchedView() {
    let movies = this.state.allMovies;
    let activeMovies = [];
    for (var movie of movies) {
      if (movie.watched) {
        activeMovies.push(movie);
      }
    }
    this.setState({
      searchedMovies: activeMovies,
      errorMessage: "noErrorMessage",
      selectedMovie: ''
    })
  }

  toWatchView() {
    let movies = this.state.allMovies;
    let activeMovies = [];
    for (var movie of movies) {
      if (!movie.watched) {
        activeMovies.push(movie);
      }
    }
    this.setState({
      searchedMovies: activeMovies,
      errorMessage: "noErrorMessage",
      selectedMovie: ''
    })
  }

  selectMovie(event) {
    let movieTitle = event.target.innerHTML;
    if (this.state.selectedMovie === movieTitle) {
      this.setState({
        selectedMovie: ''
      })
    } else {
      this.setState({
        selectedMovie: movieTitle
      })
    }
  }

  render(){
    return(
    <div>
      <h1>Movie List</h1>
      <div>
        <Search
          handleSearchClick={this.handleSearchClick}
          handleAddMovieClick={this.handleAddMovieClick}
          watchedView={this.watchedView}
          toWatchView={this.toWatchView}
        />
      </div>
      <div>
        <div className={this.state.errorMessage}>
          Oops! No movies were found matching your search criteria.
        </div>
        <MovieList
          movies={this.state.searchedMovies}
          toggleWatched={this.toggleWatched}
          selectMovie={this.selectMovie}
          selectedMovie={this.state.selectedMovie}
        />
      </div>
    </div>
  )}
}

export default App;
