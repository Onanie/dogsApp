import * as ActionTypes from '../actions/actionTypes';

export default (dog = null, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_DOG:
      return action.payload;
  }
  return dog;
};
