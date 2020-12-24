import React from 'react';
import MovieList from './MovieList.js';
import '../main.css';

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

    }
  }

  render(){
    return(
    <div>
      <h1>Movie List</h1>
      <div>
        <MovieList movies={movies}/>
      </div>
    </div>
  )}
}

export default App;
