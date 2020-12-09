import React from 'react';
import MovieListEntry from './MovieListEntry.js';

const MovieList = ({movies}) => {
  return (
    <div className="movieList">
      {movies.map(movie =>
        <MovieListEntry movie={movie} />
      )}
    </div>
  )
};

export default MovieList;