import actionTypes from './constants/actionTypes';

const actions = {};

actions.changeUser = (userType) => {
  return {
    type: actionTypes.CHANGE_USER,
    payload: userType,
  };
};

export default actions;
