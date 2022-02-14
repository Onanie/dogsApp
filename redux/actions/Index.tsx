import * as actionTypes from './actionTypes';

export const selectDog = (dog: any) => {
  return {
    type: actionTypes.SET_DOG,
    payload: dog,
  };
};
export const setSearch = (text: any) => {
  return {
    type: actionTypes.SET_SEARCH,
    payload: text,
  };
};
