import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: ''
    };

    this.searchChange = this.searchChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }


  searchChange(event) {
    let value = event.target.value;
    this.setState({searchVal: value});
  }

  searchClick() {
    this.props.handleSearchClick(this.state.searchVal);
  }


  render() {
    return (
      <div className="search">
        <input name="searchMovies" type="text" placeholder="Search..." onChange={this.searchChange}></input>
        <input type="submit" value="Go!" onClick={this.searchClick}></input>
      </div>
    )
  }
}

export default Search;