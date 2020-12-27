import React from 'react';

const MovieEntry = ({movie, toggleWatched, selectMovie, selectedMovie}) => {
  let watchedStatus = movie.watched;
  if (watchedStatus === true) {
    var status = "watched";
  } else {
    var status = "notWatched";
  };

  if (selectedMovie === movie.title) {
    var selected = "selected";
  } else {
    var selected = "notSelected";
  }

  var className = "movieInfo " + selected;

  return (
    <div className="movieEntry">
      <div
        className="movieTitle"
        onClick={selectMovie}
        >{movie.title}
      </div>
      <div className={className}>
        <b>Year: </b>1999<br></br>
        <b>Runtime: </b>112 min<br></br>
        <b>Watched: </b><input
          className={status}
          name={movie.title}
          type="submit"
          value=""
          onClick={toggleWatched}
        ></input>
      </div>
    </div>

  )
};

export default MovieEntry;