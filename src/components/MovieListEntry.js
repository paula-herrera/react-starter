import React from 'react';
import WatchedButton from './WatchedButton.js';

const MovieListEntry = ({movie, allMovies, toggleWatchedButton, toggleInfo}) => {

  let watchedStatus;

  for (var film of allMovies) {
    if (film.title === movie.title) {
      watchedStatus = film.watched;
    }
  }

  let title = movie.title;

  return (
    <div>
      <ul onClick={toggleInfo} title={title}>
        <span title={title}>
          {movie.title}
        </span>
        <WatchedButton
          watched={watchedStatus}
          toggleWatchedButton={toggleWatchedButton}
          movieTitle={movie.title}
        />
      </ul>
        <div className="info">
          <div>
            <img className="poster" src={movie.poster_url} />
          </div>
          <div>
            <ul className="year">Year:   {movie.year}</ul>
            <ul className="runtime">Runtime:   {movie.runtime} min</ul>
            <ul className="userRating">Average User Rating:   {movie.vote_average} / 10</ul>
          </div>
        </div>
  </div>
  )
}

export default MovieListEntry;