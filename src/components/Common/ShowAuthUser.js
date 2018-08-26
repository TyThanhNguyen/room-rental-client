import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { FlatButton } from 'material-ui';
import {Link, browserHistory} from 'react-router';
import axios from 'axios';

class ShowAuthUser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }


  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

    handleRequestLogout = () => {
        const {token} = this.props;
        const url = 'http://localhost:3000/tenant/users/me/token'
        axios.delete(url, {
            headers: {
                'x-auth': token
            }
        }).then(() => {
            
        })
        localStorage.clear();
        browserHistory.push('/')        
    }

  render() {
    const {email} = this.props;
    return (
      <div>
        <FlatButton
          onTouchTap={this.handleTouchTap}
          labelStyle={{textTransform: 'none', color: 'white', fontSize: '1rem'}}
          style={{backgroundColor: 'transparent'}}
          label={email}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <Link to="/"><MenuItem primaryText="Help &amp; feedback" /></Link>
            <Link to="/hostdashboard"><MenuItem primaryText="Profile" /></Link>
            <Link to="">
                <MenuItem 
                    primaryText="Log out"
                    onTouchTap={this.handleRequestLogout}
                />
            </Link>
          </Menu>
        </Popover>
      </div>
    );
  }
}

ShowAuthUser.propTypes = {
    email: PropTypes.string,
    accessType: PropTypes.string,
    token: PropTypes.string
}

export default ShowAuthUser;