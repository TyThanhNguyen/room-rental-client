import React, {PropTypes} from 'react';
import Breadcumb from '../components/Common/Breadcumb';
import Slider_Wishlist from '../components/PlaceDetails/Slider_Wishlist';
import NavBar from '../components/PlaceDetails/NavBar';
import About from '../components/PlaceDetails/About';
import RoomOption from '../components/PlaceDetails/RoomOption';
import Header from '../components/Common/Header'
import Facility from '../components/PlaceDetails/Facility';
import BillIncluded from '../components/PlaceDetails/BillIncluded';
import Security from '../components/PlaceDetails/Security';
import PropertyRule from '../components/PlaceDetails/PropertyRule';
import Review from '../components/PlaceDetails/Review';
import FlatButton from 'material-ui/FlatButton/FlatButton';

class PlaceDetails extends React.Component {
    render() {
        const {placePath, placeName} = this.props.location.state;
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
            },
            about: {
                wrapper: {
                    backgroundColor: 'white'
                },
                content: {
                    backgroundColor: '#f8f8f6',
                    width: '65%',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }
            },
            roomOption: {
                wrapper: {
                    
                },
                content: {
                    backgroundColor: '#f8f8f6',
                    width: '65%',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }
            },
            property:{
                wrapper: {
                    backgroundColor: 'white'
                },
                content: {
                }
            },
            review: {
                backgroundColor: '#f8f8f6'
            }
        }
        return (
            <div style={styles.wrapper.outDiv}>
                <Header styles={styles.header}/>
                <Breadcumb path={placePath}/>
                <div style={styles.wrapper.nestDiv}>
                    <Slider_Wishlist placeName={placeName}/>
                </div>
                <NavBar/>
                <div style={styles.about.wrapper}>
                    <div style={styles.about.content}>
                        <About />
                    </div>
                </div>
                <div style={styles.roomOption.wrapper}>
                    <div style={styles.roomOption.content}>
                        <RoomOption/>
                    </div>
                </div>
                <div style={styles.property.wrapper}>
                    <div style={styles.about.content}>
                        <Facility/>
                        <BillIncluded/>
                        <Security/>
                        <PropertyRule/>
                    </div>
                </div>
                <div style={styles.review.wrapper}>
                    <div style={styles.about.content}>
                        <Review />
                    </div>
                </div>
            </div>
        );
    }
}

PlaceDetails.propTypes = {
    university: PropTypes.string,
    placeName: PropTypes.string
}

export default PlaceDetails;