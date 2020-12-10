import React from 'react';
import MovieListEntry from './MovieListEntry.js';

const MovieList = ({movies, watched, handleWatchedClick}) => {
  return (
    <div className="movieList">
      {movies.map((movie, i) =>
        <MovieListEntry
          movie={movie}
          key={i}
          watched={watched}
          handleWatchedClick={handleWatchedClick}
          />
      )}
    </div>
  )
};

export default MovieList;