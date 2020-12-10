import React from 'react';

const WatchedButton = ({watched, movieTitle,toggleWatchedButton}) => {
  let btnClass = watched ? "watched" : "notWatched";
  let title = "" + movieTitle + "";
  return (
    <div className={btnClass}
      title={title}
      onClick={toggleWatchedButton}
      >
      Watched
    </div>
  )
}

export default WatchedButton;