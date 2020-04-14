import { LOADING, SUCCESS, ERROR } from '../actions/actions';

const initialState = {
  searchTerm: '',
  pictures: [],
  error: false,
  loading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        test: payload,
      };
    default:
      return state;
  }
};

export default reducer;
