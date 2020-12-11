import React from 'react';
import WatchedButton from './WatchedButton.js';

const MovieListEntry = ({movie, allMovies, toggleWatchedButton}) => {

  let watchedStatus;

  for (var film of allMovies) {
    if (film.title === movie.title) {
      watchedStatus = film.watched;
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