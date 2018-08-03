import React from 'react';
import { FlatButton } from 'material-ui';

class NavBar extends React.Component {
    render () {
        const styles = {
            wrapper: {
                backgroundColor: 'white',
                borderBottom: '1px solid #e7e7e7',
                height: 55
            },
            ul: {
                width: '65%',
                margin: 'auto',
                display: 'flex',
                position: 'relative',
                height: '100%',
                padding: 0,
                paddingRight: 4
            },
            li: {
                paddingTop: 5,
                paddingRight: 0,
                paddingTop: 7
            },
            viewRoomWrapper: {
                right: '0',
                position: 'absolute',
                paddingRight: 0,
                width: 300,
                textAlign: 'center',
                backgroundColor: '#38b2a6',
                padding: 0,
                height: '100%',
            },
            flatBtn: {
                color: '#63656a',
                backgroundColor: 'transparent',
            },
            viewBtnLabel: {
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 600,
            },
            viewBtn: {
                top: '14%'
            }
        }
        return (
            <nav style={styles.wrapper}>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <FlatButton 
                            label="About" 
                            rippleColor='white'
                            style={styles.flatBtn}
                        />
                    </li>
                    <li style={styles.li}>
                        <FlatButton label="Room" rippleColor='white' style={styles.flatBtn} />
                    </li>
                    <li style={styles.li}>
                        <FlatButton label="Features" rippleColor='white' style={styles.flatBtn} />
                    </li>
                    <li style={styles.li}>
                        <FlatButton label="Map" rippleColor='white' style={styles.flatBtn} />
                    </li>
                    <li style={styles.li}>
                        <FlatButton label="Reviews" rippleColor='white' style={styles.flatBtn} />
                    </li>
                    {/* <li style={styles.viewRoomWrapper}>
                        <FlatButton 
                            style={styles.viewBtn}
                            labelStyle={styles.viewBtnLabel}
                            label="View Rooms"/>
                    </li> */}
                </ul>
            </nav>
        );
    };
};

export default NavBar;