import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBook } from '../actions';

class Form extends Component {
  state = {
    title: "",
    description: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addBook(this.state);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange } />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" id="description" name="description" value={ this.state.description } onChange={ this.handleChange } />
        </div>

        <input type="submit" value="Create Book" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: (book) => dispatch(addBook(book))
  }
}

export default connect(null, mapDispatchToProps)(Form);
