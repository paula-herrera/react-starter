import React from 'react';
import '../main.css';
import MovieList from './MovieList.js'
import MoviesExampleData from './MoviesExampleData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesSearched: MoviesExampleData,
      allMovies: MoviesExampleData
    }

    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
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
      moviesSearched: searchResults
    })
  }

  render(){
    return(
    <div>
      <div className="title"><h1>MovieList</h1></div>
      <div className="searchBar">
        <Search handleSearchButtonClick={this.handleSearchButtonClick}/>
      </div>
      <div>
        <MovieList movies={this.state.moviesSearched}/>
      </div>
    </div>
  )}
}

export default App;

// ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']