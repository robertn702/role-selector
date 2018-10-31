import actionTypes from '../src/constants/actionTypes';
import actions from '../src/actions';
import userTypes from '../src/constants/userTypes';

describe('actions', () => {
  it('should have changeUser function', () => {
    const expectedActionCreator = {
      type: actionTypes.CHANGE_USER,
      payload: userTypes.ADMIN,
    };
    expect(actions.changeUser(userTypes.ADMIN)).toEqual(expectedActionCreator)
  });
});
