import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';
import { connect } from 'react-redux';
import { addAuthorizedUser } from '../../actions/signup';
import ShowAuthUser from '../Common/ShowAuthUser';

class Header extends React.Component {

  state = {
    loginOpen: false,
    signupOpen: false
  };

  componentDidMount() {
    const accessType = localStorage.getItem('client-accessType');
    const token = localStorage.getItem('client-token');
    const email = localStorage.getItem('client-email')
    this.props.dispatch(addAuthorizedUser({accessType, token, email}));
  }

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
    const {styles, accessType, email, token} = this.props;

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

    return (
        <header>
            <AppBar showMenuIconButton={false}
              style={{...style.appBar.div, ...styles}}
                title={<Link to="/"><span style={style.title}>Logo</span></Link>}
              iconElementRight={
                <div>
                  {!accessType && 
                  <Link to="/hostdashboard">
                    <FlatButton 
                      hoverColor="transparent"
                      rippleColor="transparent"
                      style={style.appBar.flatButton}
                      label="Become a host"
                      />
                  </Link>}
                  {!accessType && 
                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    label="Help" />}
                  {!accessType && 
                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    onTouchTap={this.handleSignupOpen}
                    label="Sign up" />}
                  {!accessType && 
                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    onTouchTap={this.handleLoginOpen}
                    label="Log in"
                    />}
                  {accessType &&
                    <ShowAuthUser email={email} accessType={accessType} token={token}/>
                  }
                  <Dialog
                    modal={false}
                    open={this.state.signupOpen}
                    onRequestClose={this.handleSignupClose}
                  >
                    <div style={{height: 300}}>
                     <SignupPage/>
                    </div>
                  </Dialog>
                  <Dialog
                    modal={false}
                    open={this.state.loginOpen}
                    onRequestClose={this.handleLoginClose}
                  >
                    <div style={{height: 300}}>
                      <LoginPage/>
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
  accessType: PropTypes.string,
  email: PropTypes.string
}

const mapPropToState = (state) => ({
  accessType: state.authUser.accessType,
  email: state.authUser.email,
  token: state.authUser.token,
})

export default connect(mapPropToState)(Header);
