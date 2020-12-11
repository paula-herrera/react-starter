import React from 'react';
import MovieListEntry from './MovieListEntry.js';

const MovieList = ({movies, allMovies, toggleWatchedButton, errorMessage}) => {
  return (
    <div className="movieList">
      {errorMessage}
      {movies.map((movie, i) =>
        <MovieListEntry
          movie={movie}
          key={i}
          allMovies={allMovies}
          toggleWatchedButton={toggleWatchedButton}
          />
      )}
    </div>
  )
};

export default MovieList;