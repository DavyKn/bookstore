const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// ACTION TYPE

export const addBook = (book) => ({
  type: ADD_BOOK, book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK, book,
});

//  reducer

const initialState = [
  { title: 'long walk to freedom', author: 'Nelson Mandela', id: 1 },
  { title: 'The art of not giving a fuck', author: 'Mason Green', id: 2 },
  { title: 'Kusadikika', author: 'Shabaan Bin Robert', id: 3 },
  { title: 'Becoming', author: 'Mitchel Obama', id: 4 },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state.concat(action.book)];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.book.id)];
    default: return state;
  }
};

export default bookReducer;
