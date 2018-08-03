import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class BillIncluded extends React.Component {
    render () {
        const styles = {
            wrapper: {
                backgroundColor: 'white',
                paddingTop: 30
            }
        }
        return (
            <div style={styles.wrapper}>
                <h2 style={{color: '#4c4c4c', fontSize: '1.5rem', fontWeight: 600}}>Bill Includeds</h2>
                <div style={{display: 'flex', marginTop: 20}}>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck}/>Furnished</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Shared Kitchen</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Outdoor Area</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Cinema</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Social Events</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Gym</li>
                    </ul>
                    <ul style={{marginLeft: 200}}>
                        <li><FontAwesomeIcon icon={faCheck}/>Library or Study Area</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Bike Storage</li>
                        <li><FontAwesomeIcon icon={faCheck}/>Vending Machines</li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default BillIncluded;