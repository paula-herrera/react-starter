import React from 'react';

class WatchedButton extends React.Component {
  constructor(props) {
    super(props)

    // this.state={
    //   watched: false
    // }

    this.handleWatchedClick = this.handleWatchedClick.bind(this);
  }

  handleWatchedClick() {
    this.setState({
      watched: !this.state.watched
    })
  }

  render() {
    // render here with whatever state got passed down
    let btnClass = props.watched ? "watched" : "notWatched";
    return (
      <div className={btnClass}
      onClick={this.handleWatchedClick}>
        Watched
      </div>
    )
  }

}

// const WatchedButton = ({btnClass, handleWatchedClick}) => {
//   return (
//     <div className={btnClass}
//       onClick={handleWatchedClick}
//       >
//       Watched
//     </div>
//   )
// }

export default WatchedButton;