import { LOADING, SUCCESS, ERROR } from '../actions/actions';

const initialState = {
  searchTerm: '',
  pictures: [],
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
        pictures: payload,
      };
    default:
      return state;
  }
};

export default reducer;
