import React, { Component } from 'react'
import { connect } from 'react-redux';
import Book from './Book';

class List extends Component {
  render() {
    const books = this.props.books.map( (book, i) => <Book key={i} book={book} />)
    return (
      <div>
        { books }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(List);
