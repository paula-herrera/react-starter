import React from 'react';
import MovieListEntry from './MovieListEntry.js';

const MovieList = ({movies, watched, toggleWatchedButton, errorMessage}) => {
  return (
    <div className="movieList">
      {errorMessage}
      {movies.map((movie, i) =>
        <MovieListEntry
          movie={movie}
          key={i}
          watched={watched}
          toggleWatchedButton={toggleWatchedButton}
          />
      )}
    </div>
  )
};

export default MovieList;