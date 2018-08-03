import React, { PropTypes } from 'react';
import Header from '../components/Common/Header';
import BannerSearch from '../components/HomePage/BannerSearch';
import UniversityBanner from '../components/HomePage/UniversityBanner';
import axios from 'axios';
import { addCollege } from '../actions/college';
import { connect } from 'react-redux';

class HomePage extends React.Component {

  componentDidMount() {
    if (this.props.college.length === 0) {
      axios.get('http://localhost:3000/tenant/college').then((result) => {
        result.data.forEach(element => {
          this.props.dispatch(addCollege({
            name: element.name, 
            address: element.address, 
            imagePath: element.imagePath
          }))
        })
      }).catch((e) => {
        console.log(e);
      });
    }
  };

  render() {
    const {college} = this.props;

    const styles = {
        header: {
          backgroundColor: 'transparent'
        }
    }
    return (
        <div>
          <Header styles={styles.header}/>
          <BannerSearch/>
          <UniversityBanner college={college}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  college: state.college
});


HomePage.propTypes = {
  college: PropTypes.object
}

export default connect(mapStateToProps)(HomePage);
