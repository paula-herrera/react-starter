import React from 'react';

const MovieListEntry = ({movie}) => {
  return (
    <ul>{movie.title}</ul>
  )
};

export default MovieListEntry;