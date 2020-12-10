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

    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    this.handleAddMoviesButtonClick = this.handleAddMoviesButtonClick.bind(this);
    this.handleWatchedClick = this.handleWatchedClick.bind(this)
  }

  handleSearchButtonClick(val) {
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

  handleAddMoviesButtonClick(val) {
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
      //setState.watch[] to watch here
      watched: [...this.state.watched, watched]
    })
  }

  handleWatchedClick(event) {
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
      <div className="addMovies"><AddMovies handleAddMoviesButtonClick={this.handleAddMoviesButtonClick}/></div>
      <div className="searchBar">
        <Search handleSearchButtonClick={this.handleSearchButtonClick}/>
      </div>
      <div>
        <MovieList
          movies={this.state.activeMovies}
          watched={this.state.watched}
          handleWatchedClick={this.handleWatchedClick}
          />
      </div>
    </div>
  )}
}

export default App;

// ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']