import { connect } from 'react-redux';

import CanRender from './CanRender';
import selector from '../selector';

/**
 * Only render children if the user has general permissions or above
 */

const mapStateToProps = (state) => {
  return {
    canRender: selector.isGeneralUser(state)
  };
};

export default connect(mapStateToProps)(CanRender);
