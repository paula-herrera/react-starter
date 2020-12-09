import React from 'react';
import MovieListEntry from './MovieListEntry.js';

const MovieList = ({movies}) => {
  return (
    <div className="movieList">
      {movies.map((movie, i) =>
        <MovieListEntry movie={movie} key={i}/>
      )}
    </div>
  )
};

export default MovieList;