import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Header from '../components/Common/Header';
import BannerSearch from '../components/HomePage/BannerSearch';
import UniversityBanner from '../components/HomePage/UniversityBanner';
import Footer from '../components/Common/Footer';

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header/>
          <BannerSearch/>
          <UniversityBanner />
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default withWidth()(App);
