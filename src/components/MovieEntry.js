import React from 'react';

const MovieEntry = ({movie}) => {
  return (
    <div className="movieEntry">{movie.title}</div>
  )
};

export default MovieEntry;