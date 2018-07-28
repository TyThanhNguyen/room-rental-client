import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton/FlatButton';

class Header extends React.Component {

  render() {
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
              style={style.appBar.div}
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
                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    label="Sign up" />
                  <FlatButton 
                    hoverColor="transparent"
                    rippleColor="transparent"
                    label="Log in" />
                </div>
              }
            />
        </header>
      );
  }
}

export default Header;
