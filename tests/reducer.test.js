import actionTypes from '../src/constants/actionTypes';
import reducer, { initialState } from '../src/reducer';
import userTypes from '../src/constants/userTypes';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should change user', () => {
    const newState = reducer(undefined, {
      type: actionTypes.CHANGE_USER,
      payload: userTypes.ADMIN,
    });

    expect(newState.getIn(['user', 'key'])).toEqual(userTypes.ADMIN);
  });
});
