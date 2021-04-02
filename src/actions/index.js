export const addBook = (book) => {
  return {
    type: "ADD_BOOK",
    book
  }
}

export const createBook = book => {
  return dispatch => {
    fetch('/books', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ book })
    })
    .then( resp => resp.json())
    .then( book =>  dispatch(addBook(book)))
  }
}

export const getBooks = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" })
    fetch('/books')
      .then(resp => resp.json())
      .then(books => {
        const dispatchObj = { type: "SET_BOOKS", payload: books }
        dispatch(dispatchObj);
      })
  }
}