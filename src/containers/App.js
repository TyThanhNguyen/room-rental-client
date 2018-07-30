import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../theme-default';
import Footer from '../components/Common/Footer'


class App extends React.Component {
    state = {
        isInHomePage: true,
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <div>
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        )
    }
}

App.propTypes = {
    children: PropTypes.element,
}

export default App;