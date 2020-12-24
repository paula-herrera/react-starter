import React from 'react';

const WatchedButton = ({watched, movieTitle,toggleWatchedButton}) => {
  let btnClass = watched ? "watched" : "notWatched";
  let title = "" + movieTitle + "";

  return (
    <div>
    <label htmlFor="watched">Watched: </label>
    <input type="radio"
    id="watched"
    title={title}
    className={btnClass}
    onClick={toggleWatchedButton}></input>
    </div>
  )
}

export default WatchedButton;
