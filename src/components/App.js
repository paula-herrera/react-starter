import React from 'react';
import '../main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
    <div>
      <div class="title"><h1>MovieList</h1></div>
      <div class="movieList">
          <ul>Mean Girls</ul>
          <ul>Hackers</ul>
          <ul>The Grey</ul>
          <ul>Sunshine</ul>
          <ul>Ex Machina</ul>
      </div>
    </div>
  )}
}

export default App;
