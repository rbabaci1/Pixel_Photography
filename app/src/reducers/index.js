import { LOADING, SUCCESS, ERROR, SEARCH_IMAGE } from '../actions';

const initialState = {
  storedImages: [],
  displayedImages: [],
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
        storedImages: payload,
        displayedImages: payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SEARCH_IMAGE:
      return {
        ...state,
        displayedImages: payload,
      };
    default:
      return state;
  }
};

export default reducer;
