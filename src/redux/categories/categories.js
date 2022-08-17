const STATUS = 'src/categories/STATUS';

export function checkStatus(category) {
  return {
    type: STATUS, category,
  };
}

export default function categoryReducer(state = [], action) {
  switch (action.type) {
    case STATUS:
      return 'under construction';
    default:
      return state;
  }
}
