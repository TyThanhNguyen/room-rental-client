import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { FlatButton } from 'material-ui';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class RoomOption extends React.Component {
    state = {
        value: 'a'
    }

    handleChange = (value) => {
        this.setState({
          value: value,
        });
    };

    render () {
        const styles = {
            wrapper: {
                paddingBottom: 30
            },
            headline: {
                fontSize: 24,
                paddingTop: 16,
                marginBottom: 12,
                fontWeight: 400,
            },
            tabs: {
                
            },
            h2: {
                paddingTop: 30,
                paddingBottom: 30,
                color: '#4c4c4c',
                fontSize: '1.5rem', 
                fontWeight: 600
            }, 
            roomDetails: {
                color: 'black',
                backgroundColor: '#f8f8f6',
                textDecoration: 'underline'
            }
        }
        return (
            <div style={styles.wrapper}>
                <h2 style={styles.h2}>Choose your room</h2>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.tabs}
                >
                    <Tab label="Single Room" value="a" style={styles.tabs}>
                    <div style={{padding: 20, position: 'relative'}}>
                        <ul style={{display: 'flex'}}>
                            <li><FlatButton style={styles.roomDetails} label="Room details"/></li>
                            <li style={{marginRight:0, right: '0%', position: 'absolute'}}>$500/Month</li>
                        </ul>
                        <ul style={{display: 'flex'}}>
                            <li>Move in 10/Sep/2018</li>
                            <li style={{marginRight:0, right: '0%', position: 'absolute'}}>
                                <RadioButton
                                    value="light"
                                    style={styles.radioButton}
                                />
                            </li>
                        </ul>
                    </div>
                    </Tab>
                    <Tab label="Sharing Room" value="b">
                    <div style={{padding: 20, position: 'relative'}}>
                        <ul style={{display: 'flex'}}>
                            <li><FlatButton style={styles.roomDetails} label="Room details"/></li>
                            <li style={{marginRight:0, right: '0%', position: 'absolute'}}>$500/Month</li>
                        </ul>
                        <ul style={{display: 'flex'}}>
                            <li>Move in 10/Sep/2018</li>
                            <li style={{marginRight:0, right: '0%', position: 'absolute'}}>
                                <RadioButton
                                    value="light"
                                    style={styles.radioButton}
                                />
                            </li>
                        </ul>
                    </div>
                    </Tab>
                    <Tab label="Master room" value="c" >
                    <div style={{padding: 20, position: 'relative'}}>
                        <ul style={{display: 'flex'}}>
                            <li><FlatButton style={styles.roomDetails} label="Room details"/></li>
                            <li style={{marginRight:0, right: '0%', position: 'absolute'}}>$500/Month</li>
                        </ul>
                        <ul style={{display: 'flex'}}>
                            <li>Move in 10/Sep/2018</li>
                            <li style={{marginRight:0, right: '0%', position: 'absolute'}}>
                                <RadioButton
                                    value="light"
                                    style={styles.radioButton}
                                />
                            </li>
                        </ul>
                    </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
};

export default RoomOption;