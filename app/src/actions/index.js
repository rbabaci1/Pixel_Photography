export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
const url =
  'https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200';

const cleanData = (images) =>
  images.map((image) => {
    return {
      id: image.id,
      largeImageURL: image.largeImageURL,
      likes: image.likes,
      views: image.views,
      downloads: image.downloads,
      tags: image.tags.split(',').join(''),
    };
  });

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
