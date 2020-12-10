import React from 'react';
import WatchedButton from './WatchedButton.js';

const MovieListEntry = ({movie, watched, toggleWatchedButton}) => {

  let watchedStatus;

  for (var film of watched) {
    if (film.hasOwnProperty(`${movie.title}`)){
      watchedStatus = film[`${movie.title}`]
    }
  }

  return (
    <ul>
    <span>
    {movie.title}
    </span>
    <WatchedButton
    watched={watchedStatus}
    toggleWatchedButton={toggleWatchedButton}
    movieTitle={movie.title}
    />
  </ul>
  )
}

export default MovieListEntry;