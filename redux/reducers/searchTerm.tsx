import * as ActionTypes from '../actions/actionTypes';

export default (text = null, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH:
      return action.payload;
  }
  return text;
};
