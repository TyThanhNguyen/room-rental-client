import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton/FlatButton';

class Header extends React.Component {

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

    return (
        <header>
            <AppBar showMenuIconButton={false}
              style={{...style.appBar.div, ...styles}}
              title={<span style={style.title}>Logo</span>}
              iconElementRight={
                <div>
                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    style={style.appBar.flatButton}
                    label="Become a host" />

                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    
                    label="Help" />
                  <Link to="/placelist">
                    <FlatButton 
                      hoverColor="transparent"
                      rippleColor="transparent"
                      label="Sign up" />
                  </Link>

                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    label="Log in"
                    onClick={() => {console.log('onClick'); }}
                    />
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
