import React, {PropTypes} from 'react';
import Breadcumb from '../components/Common/Breadcumb';
import LeftSide from '../components/PlaceList/LeftSide';
import MainList from '../components/PlaceList/MainList';
import Header from '../components/Common/Header';
import axios from 'axios';
import { addPlaceList } from '../actions/placeList';
import { connect } from 'react-redux';

class PlaceListPage extends React.Component {

    componentDidMount() {
        if (this.props.placeList.length === 0) {
            let encodeCollege = encodeURIComponent(this.props.location.state.title);
            console.log('encode : ', encodeCollege);
            axios.get(`http://localhost:3000/tenant/${encodeCollege}/places`).then((result) => {
                console.log(result);
                result.data.result.forEach((element) => {
                    console.log(element)
                    this.props.dispatch(addPlaceList({
                        name: element.name,
                        imagePaths: element.imagePaths,
                        walking: element.distances[0].duration,
                        bus: element.distances[1].duration,
                        driving: element.distances[1].duration,
                    }));
                })
            })
        }
    }

    render() {
        const {title} = this.props.location.state
        const {placeList} = this.props;

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
                    <MainList university={title} placeList={placeList}/>
                </div>

            </div>
        );
    };
};

PlaceListPage.propTypes = {
    title: PropTypes.string,
    placeList: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProp = (state) => ({
    placeList: state.placeList
})

export default connect(mapStateToProp)(PlaceListPage);