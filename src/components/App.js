import React from 'react';
import '../main.css';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovies from './AddMovies.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovies: [],
      allMovies: [],
      watched: []
    }

    this.searchMovies = this.searchMovies.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.toggleWatchedButton = this.toggleWatchedButton.bind(this)
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
      searchResults.push({title: "Oops! No movies matching that criteria were found."});
    }

    this.setState({
      activeMovies: searchResults,
    })
  }

  addMovies(val) {
    let movieTitle = val;

    let newMovie = {
      title: `${val}`
    }

    let watched = {
      [movieTitle]: false
    }

    this.setState({
      allMovies: [...this.state.allMovies, newMovie],
      activeMovies: [...this.state.allMovies, newMovie],
      watched: [...this.state.watched, watched]
    })
  }

  toggleWatchedButton(event) {
    let title = event.target.title;
    // find the element that matches the movie it was clicked for
    // change value of that element
    let watched = this.state.watched;
    for (var movie of watched) {
      if (movie.hasOwnProperty(`${title}`)) {
        movie[`${title}`] = !movie[`${title}`];
      }
    }

    this.setState({
      watched: watched
    })
  }

  render(){
    return(
    <div>
      <div className="title"><h1>MovieList</h1></div>

      <div className="searchBar">
        <Search
          searchMovies={this.searchMovies}
          addMovies={this.addMovies}/>
      </div>
      <div>
        <MovieList
          movies={this.state.activeMovies}
          watched={this.state.watched}
          toggleWatchedButton={this.toggleWatchedButton}
          />
      </div>
    </div>
  )}
}

export default App;

// ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']
//      <div className="addMovies"><AddMovies addMovies={this.addMovies}/></div>