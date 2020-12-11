import React from 'react';
import WatchedButton from './WatchedButton.js';

const MovieListEntry = ({movie, allMovies, toggleWatchedButton, toggleInfo, selected}) => {

  let watchedStatus;
  let title = movie.title;
  let className = "info notSelected";

  for (var film of allMovies) {
    if (film.title === movie.title) {
      watchedStatus = film.watched;
    }
  }

  //console.log('title: ', title)
  //console.log('selected: ', selected)
  console.log('rendering entry');
  console.log(selected);

  if (selected === title) {
    console.log('true');
    className= "info selected";
  } else {
    className= "info notSelected";
  }

  return (
    <div>
      <ul onClick={toggleInfo} title={title}>
        <span title={title}>
          {movie.title}
        </span>
      </ul>
        <div className={className}>
          <div>
            <img className="poster" src={movie.poster_url} />
          </div>
          <div>
          <div>
            <ul className="year">Year:   {movie.year}</ul>
            <ul className="runtime">Runtime:   {movie.runtime} min</ul>
            <ul className="userRating">Average User Rating:   {movie.vote_average} / 10</ul>
            <WatchedButton
            watched={watchedStatus}
            toggleWatchedButton={toggleWatchedButton}
            movieTitle={movie.title}/>
          </div>

          </div>

        </div>
  </div>
  )
}

export default MovieListEntry;

/* <div>
<WatchedButton
  watched={watchedStatus}
  toggleWatchedButton={toggleWatchedButton}
  movieTitle={movie.title}
/>
</div> */