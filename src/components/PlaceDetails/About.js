import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap} from '@fortawesome/free-solid-svg-icons'
import { FlatButton } from 'material-ui';


class About extends React.Component {
    render () {
        const styles = {
            wrapper: {
                backgroundColor: 'white',
                display: 'flex'
            },
            aboutDiv: {
                firstDiv: {
                    wrapper: {
                        width: '70%'
                    },
                    ul: {
                        fontSize: '0.875rem'
                    }
                },

            },
            bookingBtnDiv: {
                wrapper: {
                    width: '32%',
                    height: 300,
                    position: 'relative'
                },
                btn: {
                    backgroundColor: '#38b2a6', 
                    width: '100%', 
                    height: 50, 
                    bottom: '10%',
                    position: 'absolute'

                }

            },
        }
        return (
            <div style={styles.wrapper}>
                <div style={styles.aboutDiv.firstDiv.wrapper}>
                    <ul style={styles.aboutDiv.firstDiv.ul}>
                        <li><FontAwesomeIcon icon={faMap}/>11 Bastwick Street, Singapore</li>
                        <li>
                            <span>
                            The streets surrounding your new student accommodation may be lined with Georgian and Victorian terraces, but everything else in Clerkenwell is cutting edge. Living at iQ City means stepping out your door to check out the coolest, trendiest places London has to offer. Drool over the delicious steaks at Smiths of Smithfield, or feed your mind at the amazing Barbican arts complex. When night falls, you can sip a cocktail while marvelling at the beautiful, eccentric decor of the Zetter Townhouse.
                            From iQ City, you can walk less than 20 minutes to class at the University of the Arts London or City University. Living in Zone 1 and with four tube stations within walking distance (Angel, Old Street, Barbican and Farringdon), you’ll also have almost all London universities and attractions less than a 20-minute train ride away from home.
                            </span>
                        </li>

                    </ul>
                </div>
                <div style={styles.bookingBtnDiv.wrapper}>
                        <FlatButton  
                            labelStyle={{color: 'white'}}
                            style={styles.bookingBtnDiv.btn}
                            label="Request Details"/>
                </div>
            </div>
        );
    }
};

export default About;