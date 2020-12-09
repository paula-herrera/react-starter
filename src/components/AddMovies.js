import React from 'react';

class AddMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('change')
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('click')
    this.props.handleAddMoviesButtonClick(this.state.value);
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder="Add movie title here"
          value={this.state.value}
          onChange={this.handleChange}>

        </input>
        <input type="submit"
          value="Add"
          onClick={this.handleSubmit}>

        </input>
      </div>
    );
  }
}

export default AddMovies;