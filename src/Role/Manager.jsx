import { connect } from 'react-redux';

import CanRender from './CanRender';
import selector from '../selector';

/**
 * Only render children if the user has manager permissions or above
 */

const mapStateToProps = (state) => {
  return {
    canRender: selector.isManager(state)
  };
};

export default connect(mapStateToProps)(CanRender);
