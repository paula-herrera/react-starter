import React from 'react';

const MovieEntry = ({movie, toggleWatched}) => {
  let watchedStatus = movie.watched;
  if (watchedStatus === true) {
    var status = "watched";
  } else {
    var status = "notWatched";
  };
  return (
    <div className="movieEntry">
      {movie.title}
      <input className={status} name={movie.title} type="submit" value="Watched" onClick={toggleWatched}></input>
    </div>

  )
};

export default MovieEntry;