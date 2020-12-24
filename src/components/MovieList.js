import React from 'react';
import MovieListEntry from './MovieListEntry.js';

const MovieList = ({movies, allMovies, toggleWatchedButton, errorMessage, toggleInfo, selected}) => {
  return (
    <div className="movieList">
      {errorMessage}
      {movies.map((movie, i) =>
        <MovieListEntry
          movie={movie}
          key={i}
          allMovies={allMovies}
          toggleWatchedButton={toggleWatchedButton}
          toggleInfo={toggleInfo}
          selected={selected}
          />
      )}
    </div>
  )
};

export default MovieList;