const initialState = {
  books: []
}

const booksReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_BOOK":
      console.log('books reducer state', state);
      console.log('books reducer action', action);
      return {
        ...state,
        books: [...state.books, action.book]
      }
    default:
      return state;
  }
}

export default booksReducer;