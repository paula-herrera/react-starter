import React from 'react';
import '../main.css';
import MovieList from './MovieList.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
    <div>
      <div className="title"><h1>MovieList</h1></div>
      <div>
        <MovieList />
      </div>
    </div>
  )}
}

export default App;
