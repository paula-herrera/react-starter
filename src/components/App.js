import React from 'react';
import '../main.css';
import MovieList from './MovieList.js'
import MoviesExampleData from './MoviesExampleData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: MoviesExampleData
    }

    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
  }

  handleSearchButtonClick(val) {
    console.log(val)

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