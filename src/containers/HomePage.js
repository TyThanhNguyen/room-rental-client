import React, { PropTypes } from 'react';
import Header from '../components/Common/Header';
import BannerSearch from '../components/HomePage/BannerSearch';
import UniversityBanner from '../components/HomePage/UniversityBanner';

class HomePage extends React.Component {

  render() {
    const styles = {
        header: {
          backgroundColor: 'transparent'
        }
    }
    return (
        <div>
          <Header styles={styles.header}/>
          <BannerSearch/>
          <UniversityBanner />
        </div>
    );
  }
}


export default HomePage;
