import { FETCH_ALL_PICTURES } from '../actions/actions';

const initialState = {
  searchTerm: '',
  pictures: [],
  error: false,
  isLoading: false,
  test: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_PICTURES:
      return {
        ...state,
        test: payload,
      };
    default:
      return state;
  }
};

export default reducer;
