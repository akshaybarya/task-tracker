const LOCALSTORAGE_KEY = 'ewoufhqwuowhf3826978736enljnjlad';

export const getCardDataFromLS = () => {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
};

export const setCardDataToLS = (data) => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};
