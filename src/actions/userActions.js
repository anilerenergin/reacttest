// userActions.js
import AppDispatcher from '../dispatcher/AppDispatcher';
import * as ActionTypes from './ActionTypes';

export const fetchUserData = () => {
  // Placeholder action, you might fetch real data here
  AppDispatcher.dispatch({
    type: ActionTypes.FETCH_USER_DATA,
    payload: { /* your data here */ },
  });
};
