import React from 'react';

const MovieList = ({movies}) => {
  return (
    <div className="movieList">
      <ul>{movies[0]}</ul>
      <ul>{movies[1]}</ul>
      <ul>{movies[2]}</ul>
      <ul>{movies[3]}</ul>
      <ul>{movies[4]}</ul>
    </div>
  )
};

export default MovieList;