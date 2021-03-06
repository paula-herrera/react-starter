import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      value: '',
      watchedBtn: 'off',
      toWatchBtn: 'off'
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.watchedClick = this.watchedClick.bind(this);
    this.toWatchClick = this.toWatchClick.bind(this);
  }

  handleSearchChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleSearchSubmit() {
    this.props.searchMovies(this.state.searchValue);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    this.props.addMovies(this.state.value);
  }

  watchedClick() {
    this.props.watchedView()

    this.setState({
      watchedBtn: 'on',
      toWatchBtn: 'off'
    })
  }

  toWatchClick() {
    this.props.toWatchView()

    this.setState({
      watchedBtn: 'off',
      toWatchBtn: 'on'
    })
  }

  render() {
    return (
      <div>
        <div>
          <input type="text"
            placeholder="Add movie title here"
            value={this.state.value}
            onChange={this.handleChange}>
          </input>
          <input type="submit"
            id="add"
            value="Add"
            onClick={this.handleSubmit}>
          </input>
        </div>
        <div>
          <div className="watchedViewBtns">
            <input type="submit"
              value="Watched"
              className={this.state.watchedBtn}
              onClick={this.watchedClick}>
            </input>
            <input type="submit"
              value="To Watch"
              className={this.state.toWatchBtn}
              onClick={this.toWatchClick}>
            </input>
          </div>
          <input type="text"
            placeholder="Search..."
            value={this.state.searchValue}
            onChange={this.handleSearchChange}>
          </input>
          <input type="submit"
            value="Go!"
            onClick={this.handleSearchSubmit}>
          </input>
        </div>
      </div>
    )
  }
}

export default Search;