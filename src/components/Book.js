import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { title, description } = this.props.book;
    return (
      <div>
        <h3>{ title} </h3>
        <p> { description }</p>
      </div>
    )
  }
}

export default Book
