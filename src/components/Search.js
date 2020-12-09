import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    this.props.handleSearchButtonClick(this.state.value);
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder="Search..."
          value={this.state.value}
          onChange={this.handleChange}>
        </input>
        <input type="submit"
          value="Go!"
          onClick={this.handleSubmit}>
        </input>
      </div>
    );
  }
}

export default Search;