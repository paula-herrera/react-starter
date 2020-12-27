import React from 'react';
import MovieEntry from './MovieEntry.js';

const MovieList = ({movies, toggleWatched}) => {
  return (
    <div className="movieList">
      {movies.map((movie, i) =>
        <MovieEntry movie={movie} toggleWatched={toggleWatched} key={i}/>
      )}
    </div>
  )
}

export default MovieList;