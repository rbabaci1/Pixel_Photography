import { cleanData } from '../helpers';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const SEARCH = 'SEARCH';

export const fetchAllImages = (url, waitTime) => (dispatch) => {
  dispatch({
    type: LOADING,
  });

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const cleanedData = cleanData(data.hits);

      setTimeout(() => {
        dispatch({
          type: SUCCESS,
          payload: cleanedData,
        });
      }, waitTime);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: 'Request failed, please try again!',
      });
      console.error(err);
    });
};

export const updateSearchTerm = (searchTerm) => {
  return {
    type: SEARCH,
    payload: searchTerm,
  };
};
