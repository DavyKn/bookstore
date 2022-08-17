const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// ACTION TYPE

const addBook = () => ({
  type: ADD_BOOK,
});

const removeBook = () => ({
  type: REMOVE_BOOK,
});

//  reducer

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.book.id)];
    default: return state;
  }
};

export default bookReducer;
export { addBook, removeBook };
