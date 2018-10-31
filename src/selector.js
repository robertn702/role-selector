const selector = {};

/**
 * selectors for the store
 * Note: no memoization is currenlty used since no selectors are computationally heavy
 */

selector.user = (state) => {
  return state.get('user');
};

selector.userRole = (state) => {
  return state.getIn(['user', 'role'], 1);
};


/**
 * Role selectors
 */

selector.isAdmin = (state) => {
  return selector.userRole(state) >= 5;
};

selector.isManager = (state) => {
  return selector.userRole(state) >= 3;
};

selector.isGeneralUser = (state) => {
  return selector.userRole(state) >= 1;
};

export default selector;
