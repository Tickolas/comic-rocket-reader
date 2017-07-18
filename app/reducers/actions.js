import * as ActionTypes from '../constants/ActionTypes';

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

const actionsMap = {
  [ActionTypes.ADD_TODO](state, action) {
    return [{
      id: 1,
      completed: false,
      text: action.text
    }, ...state];
  }
};
