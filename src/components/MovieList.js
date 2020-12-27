import React from 'react';
import MovieEntry from './MovieEntry.js';

const MovieList = ({movies, toggleWatched, selectMovie, selectedMovie}) => {
  return (
    <div className="movieList">
      {movies.map((movie, i) =>
        <MovieEntry
          movie={movie}
          toggleWatched={toggleWatched}
          selectMovie={selectMovie}
          selectedMovie={selectedMovie}
          key={i}
        />
      )}
    </div>
  )
}

export default MovieList;