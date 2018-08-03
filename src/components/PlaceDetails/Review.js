import React from 'react';
import FlatButton from 'material-ui/FlatButton/FlatButton';

class Security extends React.Component {
    render () {
        const styles = {
            wrapper: { 
                paddingTop: 30

            }
        }
        return (
            <div style={styles.wrapper}>
                <ul style={{display: 'flex', position: 'relative'}}>
                    <li style={{color: '#4c4c4c', fontSize: '1.5rem', fontWeight: 600}}>Reviews</li>
                    <li style={{right: '0%', position: 'absolute'}}><FlatButton labelStyle={{fontSize: '1rem', fontWeight: 600, color: '#4c4c4c'}} style={{border: '2px solid #38b2a6', backgroundColor: '#f8f8f6'}} label="Write review"/></li>
                </ul>
                <div style={{display: 'flex', position: 'relative', marginTop: 60}}>
                    <ul style={{marginLeft: 50, fontSize: '1.0rem', fontWeight: 400, width: '20%'}}>
                        <li>From</li>
                        <li>Thanh Ty</li>
                    </ul>
                    <div style={{ border: '1px solid #e7e7e7', backgroundColor: 'white', right: '2%', position: 'absolute', width: '60%', padding: 20}}>
                        <ul style={{display: 'flex', position: 'relative'}}>
                            <li style={{marginRight:30}}>Rate: </li>
                            <li style={{marginRight:30, color: 'purple', fontSize: '1.5rem', fontWeight: 600}}>8.0</li>
                            <li style={{right: '0%', position: 'absolute'}}>20/08/2018</li>
                        </ul>
                        <p>The building itself is quite new and clean, but the facilities inside sometimes do not work very well; for examples, the fire alarm system always give false alarms and the heater occasionally stop working. But in general, it is a very good place for students to live in</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Security;