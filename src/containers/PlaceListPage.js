import React, {PropTypes} from 'react';
import Breadcumb from '../components/Common/Breadcumb';
import LeftSide from '../components/PlaceList/LeftSide';
import MainList from '../components/PlaceList/MainList';
import Header from '../components/Common/Header';

class PlaceListPage extends React.Component {
    render() {
        // const {title} = this.props.location.state
        const title = "whatever"
        console.log('@123');
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
                <Breadcumb path={title}/>
                <div style={styles.wrapper.nestDiv}>
                    <LeftSide/>
                    <MainList university={title}/>
                </div>

            </div>
        );
    };
};

PlaceListPage.propTypes = {
    title: PropTypes.string
}

export default PlaceListPage;