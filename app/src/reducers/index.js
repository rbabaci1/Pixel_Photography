import { LOADING, SUCCESS, ERROR } from '../actions';

const initialState = {
  images: [],
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
    default:
      return state;
  }
};

export default reducer;
