import React, {PropTypes} from 'react';
import Breadcumb from '../components/Common/Breadcumb';
import Slider_Wishlist from '../components/PlaceDetails/Slider_Wishlist';
import NavBar from '../components/PlaceDetails/NavBar';
import About from '../components/PlaceDetails/About';
import RoomOption from '../components/PlaceDetails/RoomOption';
import Property from '../components/PlaceDetails/Property';
import Header from '../components/Common/Header'

class PlaceDetails extends React.Component {
    render() {
        const {placePath} = this.props.location.state;
        const styles = {
            header: {
                backgroundColor: '#4c4c4c'
            },
            wrapper: {
                outDiv: {
                    width: '100%',
                },
                nestDiv: {
                    width: '65%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    position: 'relative',
                    display: 'flex',
                },
            }
        }
        return (
            <div style={styles.wrapper.outDiv}>
                <Header styles={styles.header}/>
                <Breadcumb path={placePath}/>
                <div style={styles.wrapper.nestDiv}>
                    <Slider_Wishlist/>
                </div>
                <NavBar/>
                <About/>
                <RoomOption/>
                <Property/>
            </div>
        );
    }
}

PlaceDetails.propTypes = {
    university: PropTypes.string
}

export default PlaceDetails;