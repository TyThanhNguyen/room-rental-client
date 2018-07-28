import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import { blue100 } from '../../node_modules/material-ui/styles/colors';

class PlaceListPage extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{backgroundColor: blue100, height: 400}}>hello placelist</h1>
            </div>
        );
    };
};

export default withWidth()(PlaceListPage);