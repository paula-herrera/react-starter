import React from 'react';
import '../main.css';
import MovieList from './MovieList.js';
import Form from './Form.js';
import AddMovies from './AddMovies.js';

let moviesSample = [{
  title: 'Little Miss Sunshine',
  year: 2006,
  runtime: 102,
  vote_average: 7.6,
  poster_url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/tFnTds88mCuLcLPBseK1kF2E3qv.jpg'
},
{
  title: 'Fantastic Mr. Fox',
  year: 2009,
  runtime: 87,
  vote_average: 7.7,
  poster_url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/njbTizADSZg4PqeyJdDzZGooikv.jpg'
},
{
  title: 'Gentlemen Prefer Blondes',
  year: 1953,
  runtime: 91,
  vote_average: 7.2,
  poster_url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/o37B6gW7L5S2bmY52nDcf4JcnwH.jpg'
},
{
  title: 'What We Do in the Shadows',
  year: 2015,
  runtime: 86,
  vote_average: 7.6,
  poster_url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/pDKJFVofjfQj0cUa7z4NAXZavW.jpg'
},
{
  title: 'Spirited Away',
  year: 2001,
  runtime: 125,
  vote_average: 8.5,
  poster_url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/2TeJfUZMGolfDdW6DKhfIWqvq8y.jpg'
}]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovies: moviesSample,
      allMovies: moviesSample,
      selected: ''
    }

    this.errorMessage = '';

    this.searchMovies = this.searchMovies.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.toggleWatchedButton = this.toggleWatchedButton.bind(this)
    this.watchedView = this.watchedView.bind(this);
    this.toWatchView = this.toWatchView.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
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
    let toWatchMovies = [];

    for (var movie of this.state.allMovies) {
      if (!movie.watched) {
        toWatchMovies.push(movie)
      }
    }

    this.setState({
      activeMovies: toWatchMovies
    })
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

  toggleInfo(event) {
    this.setState({
      selected: `${event.target.title}`
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
          toggleInfo={this.toggleInfo}
          />
      </div>
    </div>
  )}
}

export default App;
