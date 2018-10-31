import React from 'react';

import PropTypes from 'prop-types';

/**
 * Renders component or passes canRender value to child function
 */

export default class CanRender extends React.PureComponent {
  static displayName = 'CanRender';
  static propTypes = {
    canRender: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf([
        PropTypes.node,
        PropTypes.func,
      ]),
      PropTypes.node,
      PropTypes.func,
    ]),
  };

  render() {
    if (typeof this.props.children === 'function') {
      return this.props.children(this.props.canRender);
    }

    if (!this.props.canRender) {
      return null;
    }

    if (Array.isArray(this.props.children)) {
      return (
        <React.Fragment>{this.props.children}</React.Fragment>
      );
    }

    return this.props.children;
  }
}
