import React from 'react';
import '../main.css';
import MovieList from './MovieList.js';
import Form from './Form.js';
import AddMovies from './AddMovies.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovies: [],
      allMovies: [],
      //watched: []
    }

    this.errorMessage = '';

    this.searchMovies = this.searchMovies.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.toggleWatchedButton = this.toggleWatchedButton.bind(this)
    this.watchedView = this.watchedView.bind(this);
    this.toWatchView = this.toWatchView.bind(this);
  }

  searchMovies(val) {
    let searchResults = [];

    for (var movie of this.state.allMovies) {
      let title = movie.title.toLowerCase();
      if (title.indexOf(val.toLowerCase()) > -1) {
        searchResults.push(movie);
      };
    }

    if (searchResults.length === 0) {
      this.errorMessage = 'Oops! No movies matching that search criteria were found.';
    }

    if (searchResults.length > 0) {
      this.errorMessage = '';
    }

    this.setState({
      activeMovies: searchResults,
    })
  }

  addMovies(val) {
    let movieTitle = val;

    if (val.length === 0) {
      return;
    }

    let newMovie = {
      title: `${val}`,
      watched: false
    }

    this.errorMessage = '';

    this.setState({
      allMovies: [...this.state.allMovies, newMovie],
      activeMovies: [...this.state.allMovies, newMovie],
    })
  }

  watchedView() {
    let watchedMovies = [];

    for (var movie of this.state.allMovies) {
      if (movie.watched) {
        watchedMovies.push(movie)
      }
    }

    this.setState({
      activeMovies: watchedMovies
    })
  }

  toWatchView() {
    console.log('test to watch');
  }

  toggleWatchedButton(event) {
    let title = event.target.title;
    let watchedStatus = event.target.className;
    let movies = this.state.allMovies;

    for (var movie of movies) {
      if(movie.title === title) {
        if (watchedStatus === "notWatched") {
          movie.watched = true;
        } else {
          movie.watched = false;
        }
      }
    }

    this.setState({
      allMovies: movies
    })
  }

  render(){
    return(
    <div>
      <div className="title"><h1>MovieList</h1></div>

      <div className="searchBar">
        <Form
          searchMovies={this.searchMovies}
          addMovies={this.addMovies}
          watchedView={this.watchedView}
          toWatchView={this.toWatchView}/>
      </div>
      <div>
        <MovieList
          movies={this.state.activeMovies}
          allMovies={this.state.allMovies}
          toggleWatchedButton={this.toggleWatchedButton}
          errorMessage={this.errorMessage}
          />
      </div>
    </div>
  )}
}

export default App;
