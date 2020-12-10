import React from 'react';
import WatchedButton from './WatchedButton.js';

const MovieListEntry = (props) => {
  // check props.watched for props.movie.title
    // if value is watched
      // watched attribute is watched
    // else
      // watched attribute is notWated
  let watched;

  for (var title in props.watched) {
    if (title === props.movie.title) {
      if
    }
  }

  return (
    <ul>
    {props.movie.title}
    <WatchedButton
    // pass down state here
    watched={watched}
    />
  </ul>
  )
}

// class MovieListEntry extends React.Component {
//   constructor(props) {
//     super(props)

//     // this.state = {
//     //   watched: false,
//     // }

//     //this.handleWatchedClick = this.handleWatchedClick.bind(this);
//   }

//   // handleWatchedClick() {
//   //   this.setState({
//   //     watched: !this.state.watched,
//   //   })
//   // }

//   render() {
//     //let btnClass = this.state.watched ? "watched" : "notWatched";
//     return (
//       <ul>
//         {this.props.movie.title}
//         <WatchedButton
//         //btnClass={btnClass}
//         //handleWatchedClick={this.handleWatchedClick}
//         />
//       </ul>
//     )
//   }
// };

export default MovieListEntry;