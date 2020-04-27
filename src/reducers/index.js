import { LOADING, SUCCESS, ERROR, SEARCH } from '../actions';

const initialState = {
  images: [],
  searchTerm: '',
  error: '',
  loading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        images: payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'CATEGORY_CHANGE':
      return {
        ...state,
        category: payload,
      };
    case SEARCH:
      return {
        ...state,
        searchTerm: payload,
      };
    default:
      return state;
  }
};

export default reducer;
