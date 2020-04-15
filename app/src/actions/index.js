import { cleanData } from '../helpers';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const SEARCH_IMAGE = 'SEARCH_IMAGE';

const url =
  'https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200';

export const fetchAllPictures = () => (dispatch) => {
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
      }, 2500);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: 'Request failed, please try again!',
      });
      console.error(err);
    });
};

export const searchImage = (filteredImages) => {
  return {
    type: SEARCH_IMAGE,
    payload: filteredImages,
  };
};
