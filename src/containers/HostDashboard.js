import React from 'react';
import Header from '../components/Common/Header';
import LeftNavbar from '../components/HostDashboard/LeftNavbar';
import Data from '../data';


class HostDashboard extends React.Component {
    render () {
            
        const styles = {
            wrapper: {
                width: '65%',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex'
            },
            header: {

            },
            container: {
                margin: '80px 20px 20px 15px',
                width: '70%',
                marginTop: 100
            }
        };

        return (
            <div>
                <Header />
                <div style={styles.wrapper}>
                    <LeftNavbar 
                                menus={Data.hostDashboardMenu}
                                username="Thanh Ty"/>
        
                    <div style={styles.container}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default HostDashboard;