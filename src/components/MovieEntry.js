import React from 'react';

const MovieEntry = ({movie}) => {
  return (
    <div class="movieEntry">{movie.title}</div>
  )
};

export default MovieEntry;