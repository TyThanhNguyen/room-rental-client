import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Breadcumb from '../components/Common/Breadcumb';
import LeftSide from '../components/PlaceList/LeftSide';
import MainList from '../components/PlaceList/MainList';

class PlaceListPage extends React.Component {
    render() {

        const styles = {
            wrapper: {
                outDiv: {
                    width: '100%',
                    position: 'absolute'
                },
                nestDiv: {
                    width: '65%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    position: 'related',
                },
                breadcumb: {
                    
                },
                leftSide: {

                },
                mainList: {

                }
            }
        }

        return (
            <div style={styles.wrapper.outDiv}>
                <Breadcumb/>
                <div style={styles.wrapper.nestDiv}>
                    <LeftSide/>
                    <MainList/>
                </div>
            </div>
        );
    };
};

export default withWidth()(PlaceListPage);