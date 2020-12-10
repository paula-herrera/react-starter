import React from 'react';

const WatchedButton = ({watched, movieTitle,handleWatchedClick}) => {
  let btnClass = watched ? "watched" : "notWatched";
  let title = "" + movieTitle + "";
  return (
    <div className={btnClass}
      title={title}
      onClick={handleWatchedClick}
      >
      Watched
    </div>
  )
}

export default WatchedButton;