import { connect } from 'react-redux';

import CanRender from './CanRender';
import selector from '../selector';

/**
 * Only render children if the user has admin permissions or above
 */

const mapStateToProps = (state) => {
  return {
    canRender: selector.isAdmin(state)
  };
};

export default connect(mapStateToProps)(CanRender);
