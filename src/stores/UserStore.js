// UserStore.js
import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import * as ActionTypes from '../actions/ActionTypes';

const CHANGE_EVENT = 'change';

let userData = {};

const UserStore = Object.assign({}, EventEmitter.prototype, {
  getUserData: () => userData,

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_DATA:
      // Handle the action, update the store's state
      // For simplicity, just updating the userData object here
      userData = action.payload;
      UserStore.emitChange();
      break;

    default:
      // do nothing
  }
});

export default UserStore;
