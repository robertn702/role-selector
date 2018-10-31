import './App.scss';

import React from 'react';

import RoleSelector from './RoleSelector';

export default class App extends React.PureComponent {
  static displayName = 'App';
  static propTypes = {};

  render() {
    return (
      <div className='App'>
        <RoleSelector />
      </div>
    );
  }
}
