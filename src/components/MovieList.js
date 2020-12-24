import React from 'react';
import MovieEntry from './MovieEntry.js';

const MovieList = ({movies}) => {
  return (
    <div class="movieList">
      {movies.map(movie =>
        <MovieEntry movie={movie} />
      )}
    </div>
  )
}

export default MovieList;