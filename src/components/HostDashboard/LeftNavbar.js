import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';

const LeftNavbar = (props) => {
    
    const styles = {
        logo: {
            cursor: 'pointer',
            fontSize: 22,
            color: typography.textFullWhite,
            lineHeight: `${spacing.desktopKeylineIncrement}px`,
            fontWeight: typography.fontWeightLight,
            backgroundColor: blue600,
            paddingLeft: 40,
            maxHeight: 57
        },
        menuItem: {
            color: '#63656a',
            fontSize: 14
        },
        avatar: {
            div: {
                padding: '15px 0 20px 15px',
                height: 45
            },
            icon: {
                float: 'left',
                display: 'block',
                marginRight: 15,
                // boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
            },
            span: {
                paddingTop: 12,
                display: 'block',
                color: '#4c4c4c',
                fontWeight: 400,
                fontSize: '1.5rem'
                // textShadow: '1px 1px #444'
            }
        }
    };

    return (
        <Drawer
            docked={true}
            containerStyle={{marginTop: 100, position: 'relative', boxShadow: 'none', background: 'white', width: 230}}
            >
            <div style={styles.avatar.div} >
                <Avatar src="https://lilpickmeupdotcom.files.wordpress.com/2015/01/happy-smile-guy.jpg"
                        size={50}
                        style={styles.avatar.icon}/>
                <span style={styles.avatar.span}>{props.username}</span>
            </div>
            <div>
                {props.menus.map((menu, index) => 
                    <MenuItem
                        key={index}
                        style={styles.menuItem}
                        primaryText={menu.text}
                        leftIcon={menu.icon}
                        containerElement={<Link to={menu.link}/>}
                    />
                )}
            </div>
        </Drawer>
    );
};

LeftNavbar.propTypes = {
    menus: PropTypes.array,
    username: PropTypes.string,
};

export default LeftNavbar;