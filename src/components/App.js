import React from 'react';
import '../main.css';
import MovieList from './MovieList.js'
import MoviesExampleData from './MoviesExampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
    <div>
      <div className="title"><h1>MovieList</h1></div>
      <div>
        <MovieList movies={MoviesExampleData}/>
      </div>
    </div>
  )}
}

export default App;

// ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']