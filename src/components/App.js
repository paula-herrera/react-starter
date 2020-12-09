import React from 'react';
import '../main.css';
import MovieList from './MovieList.js'
import MoviesExampleData from './MoviesExampleData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: MoviesExampleData,
      searchedMovies: []
    }

    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
  }

  handleSearchButtonClick(val) {
    // console.log(val)
    // console.log(this.state.movies);
    for (var movie of this.state.movies) {
      //console.log('original title:', movie.title);
      let title = movie.title.toLowerCase();
      //console.log('toLowerCase title:', title);
      if (title.indexOf(val.toLowerCase()) > -1) {
        console.log(`${movie.title}`);
      };
    }

  }

  render(){
    return(
    <div>
      <div className="title"><h1>MovieList</h1></div>
      <div className="searchBar">
        <Search handleSearchButtonClick={this.handleSearchButtonClick}/>
      </div>
      <div>
        <MovieList movies={this.state.movies}/>
      </div>
    </div>
  )}
}

export default App;

// ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']