export const FETCH_ALL_PICTURES = 'FETCH_ALL_PICTURES';
const url = 'https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae';

const fetchAllPicture = () => {
  return {
    type: FETCH_ALL_PICTURES,
    payload: 'test pictures',
  };
};
