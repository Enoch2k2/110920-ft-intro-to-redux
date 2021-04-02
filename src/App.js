import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './components/Form'
import List from './components/List'

import { getBooks } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getBooks()
  }

  render() {

    if(this.props.loading) {
      return <h3>Loading...</h3>
    }
    
    return (
      <div className="App">
        <h3>Create Book</h3>
        <Form />
        <h3>Book List</h3>
        <List />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getBooks })(App);
