import userTypes from './constants/userTypes';

export default {
  [userTypes.ADMIN]: {
    name: 'Admin',
    key: userTypes.ADMIN,
    role: 5,
  },
  [userTypes.MANAGER]: {
    name: 'Manager',
    key: userTypes.MANAGER,
    role: 3,
  },
  [userTypes.GENERAL_USER]: {
    name: 'General User',
    key: userTypes.GENERAL_USER,
    role: 1,
  },
};
