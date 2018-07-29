import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../theme-default';
import withWidth from 'material-ui/utils/withWidth';
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'


class App extends React.Component {
    state = {
        isInHomePage: true,
    }

    componentWillReceiveProps() {
        console.log('run1')
        if (this.props.location.pathname === '/') {
            this.setState({
                isInHomePage: false
            })
        } else {
            this.setState({
                isInHomePage: true
            })
        }
    }

    componentWillMount() {
        if (this.state.isInHomePage === true && this.props.location.pathname !== '/') {
            this.setState({
                isInHomePage: false
            });
        }
    }

    render(){
        const styles = {
            header:{
                backgroundColor: this.state.isInHomePage ? 'transparent' : '#4c4c4c',
            }
        }

        return(
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <Header styles={styles.header}/>
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