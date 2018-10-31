import './RoleSelector.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ImmutablePropTypes from 'react-immutable-proptypes';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import map from 'lodash/map';

import PropTypes from 'prop-types';

import Role from './Role';
import actions from './actions';
import dummyUsers from './dummyUsers';
import selector from './selector';

/**
 * Display user name and role. Allow user to change users
 */

const mapStateToProps = (state) => {
  return {
    user: selector.user(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  const { changeUser } = bindActionCreators(actions, dispatch);
  return {
    changeUser,
  };
};

class RoleSelector extends React.PureComponent {
  static displayName = 'RoleSelector';
  static propTypes = {
    user: ImmutablePropTypes.mapContains({
      name: PropTypes.string,
      key: PropTypes.oneOf(map(dummyUsers, ({key}) => key)),
      role: PropTypes.oneOf([1, 3, 5]),
    }),
    changeUser: PropTypes.func,
  };

  onChangeUser = (e) => {
    const { value } = e.target;
    this.props.changeUser(value);
  };

  render() {
    return (
      <div className='RoleSelector'>

        <Select value={this.props.user.get('key')} onChange={this.onChangeUser}>
          {
            map(dummyUsers, (user, key) => (
              <MenuItem key={user.role} value={key}>{user.name}</MenuItem>
            ))
          }
        </Select>

        <Card className={'RoleSelector-section'}>
          <CardHeader title={'Admin'} />
          <CardContent>
            <Role.Admin>
              <Typography component='p'>
                {`This is an Admin feature. You can use the <Role.Admin /> wrapper anywhere. Only admins can see it's content, or you can choose what to render based on whether the user is an admin or not, like below!`}
              </Typography>
            </Role.Admin>
            <Role.Admin>
              {(isAdmin) => (
                <Typography component='p'>
                  {
                    isAdmin ? `I AM an admin! :D` : `I AM NOT an admin :(`
                  }
                </Typography>
              )}
            </Role.Admin>
          </CardContent>

        </Card>

        <Role.Manager>
          <Card className={'RoleSelector-section'}>
            <CardHeader title={'Manager'} />
            <CardContent>
              <Typography component='p'>{'Managers and higher can see this card'}</Typography>
            </CardContent>
          </Card>
        </Role.Manager>

        <Role.GeneralUser>
          <Card className={'RoleSelector-section'}>
            <CardHeader title={'General User'} />
            <CardContent>
              <Typography component='p'>{'general users and everyone else can see this text'}</Typography>
            </CardContent>
          </Card>
        </Role.GeneralUser>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoleSelector);
