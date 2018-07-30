import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Breadcumb extends React.Component {
    render() {
        const {path}  = this.props;

        const styles = {
            breadcumb: {
                section: {
                    width: '100%',
                    boxShadow: '0 0px 0px rgba(0,0,0,0.0), 0 1px 1px rgba(0,0,0,0.1)',
                    backgroundColor: 'white'
                },
                div: {
                    marginTop: 57,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    width: '65%',
                    position: 'relative',
                    backgroundColor: 'white'
                },
                home: {
                    paddingRight: 5,
                    color: '#63656a',
                    fontSize: '1rem',
                    fontWeight: 400,
                },
                schoolName: {
                    color: '#63656a',
                    fontSize: '1rem',
                    textDecoration: 'none'
                }
            }
        }

        return (
            <section style={styles.breadcumb.section}>
                <div style={styles.breadcumb.div}>
                    <p style={styles.breadcumb.home}>Home /</p>
                    <Link to="" style={styles.breadcumb.schoolName}>
                        <p>{path}</p>
                    </Link>
                </div>
            </section>
        );
    };
};  

Breadcumb.propTypes = {
    path: PropTypes.string    
}

export default Breadcumb;
