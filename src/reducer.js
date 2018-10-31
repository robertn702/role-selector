import { fromJS } from 'immutable';

import actionTypes from './constants/actionTypes';
import dummyUsers from './dummyUsers';
import userTypes from './constants/userTypes';

export const initialState = fromJS({
  user: dummyUsers[userTypes.GENERAL_USER],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER: {
      const userType = action.payload;
      return state.set('user', fromJS(dummyUsers[userType]));
    }
    default:
      return state;
  }
}
