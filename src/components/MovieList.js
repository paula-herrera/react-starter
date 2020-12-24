import React from 'react';
import MovieEntry from './MovieEntry.js';

const MovieList = ({movies}) => {
  return (
    <div className="movieList">
      {movies.map((movie, i) =>
        <MovieEntry movie={movie} key={i}/>
      )}
    </div>
  )
}

export default MovieList;