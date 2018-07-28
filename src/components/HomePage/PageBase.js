import React, {PropTypes}  from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../styles';

const PageBase = (props) => {

    return (
        <div>

            <Paper>

                {props.children}

            </Paper>
        </div>
    );
};

PageBase.propTypes = {
    children: PropTypes.element
};

export default PageBase;