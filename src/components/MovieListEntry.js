import React from 'react';
import WatchedButton from './WatchedButton.js';

const MovieListEntry = ({movie, watched, handleWatchedClick}) => {

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
    handleWatchedClick={handleWatchedClick}
    movieTitle={movie.title}
    />
  </ul>
  )
}

export default MovieListEntry;