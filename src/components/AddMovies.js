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
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    this.props.addMovies(this.state.value);
  }

  render() {
    return (
      
    );
  }
}

export default AddMovies;