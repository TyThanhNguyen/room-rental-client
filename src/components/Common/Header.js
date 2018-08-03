import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class Header extends React.Component {

  state = {
    loginOpen: false,
    signupOpen: false
  };

  handleLoginOpen = () => {
    this.setState({loginOpen: true});
  };

  handleLoginClose = () => {
    this.setState({loginOpen: false});
  };

  handleSignupOpen = () => {
    this.setState({signupOpen: true});
  };

  handleSignupClose = () => {
    this.setState({signupOpen: false});
  };

  render() {
    const {styles} = this.props;

    const style = {
      appBar:{
        div: {
          position: 'absolute',
          top: '0%',
          width: '100%',
          boxShadow: 'none'
        },
        flatButton:{
          marginTop: 5
        }
      },
    }

    const signupAction = [
      <FlatButton
        label="Sign up"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSignupClose}
      />,
    ];

    const loginAction = [
      <FlatButton
        label="Login"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleLoginClose}
      />,
    ];

    return (
        <header>
            <AppBar showMenuIconButton={false}
              style={{...style.appBar.div, ...styles}}
              title={<span style={style.title}>Logo</span>}
              iconElementRight={
                <div>
                  <Link to="/hostdashboard">
                    <FlatButton 
                      hoverColor="transparent"
                      rippleColor="transparent"
                      style={style.appBar.flatButton}
                      label="Become a host"
                      />
                  </Link>
                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    label="Help" />
                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    onTouchTap={this.handleSignupOpen}
                    label="Sign up" />
                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    onTouchTap={this.handleLoginOpen}
                    label="Log in"
                    />
                  <Dialog
                    actions={signupAction}
                    modal={false}
                    open={this.state.signupOpen}
                    onRequestClose={this.handleSignupClose}
                  >
                    <div>
                      <TextField
                        hintText="Email"
                      />
                      <br />
                      <TextField
                        hintText="Password"
                      />
                    </div>
                  </Dialog>
                  <Dialog
                    actions={loginAction}
                    modal={false}
                    open={this.state.loginOpen}
                    onRequestClose={this.handleLoginClose}
                  >
                    <div>
                      <TextField
                        hintText="Email"
                      />
                      <br />
                      <TextField
                        hintText="Password"
                      />
                    </div>
                  </Dialog>
                </div>
              }
            />
        </header>
      );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
}

export default Header;
