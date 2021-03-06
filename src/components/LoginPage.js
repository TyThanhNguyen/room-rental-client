import React from 'react';
import {grey500, white} from 'material-ui/styles/colors';
import {browserHistory} from 'react-router';
import { Paper, TextField, Checkbox, RaisedButton, FlatButton } from 'material-ui';
import Help from 'material-ui/svg-icons/action/help';
import axios from 'axios';

class LoginPage extends React.Component {
    state = {
        email: '',
        password: ''
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/tenant/users/login', {
            email: this.state.email,
            password: this.state.password
        }).then((result) => {
            const token = result.data.tokens[0].token;
            const accessType = result.data.tokens[0].access;
            const email = result.data.email;
            localStorage.setItem('client-token', token);
            localStorage.setItem('client-accessType', accessType);
            localStorage.setItem('client-email', email);
            browserHistory.push('/hostdashboard');
        }).catch((e) => {
            console.log(e);
            browserHistory.push('/')
        });
        this.setState(() => ({ email: '', password: '' }));
    }

    render() {
        const styles = {
            loginContainer: {
                minWidth: 320,
                maxWidth: 400,
                height: 'auto',
                position: 'absolute',
                top: '20%',
                left: 0,
                right: 0,
                margin: 'auto'
            },
            paper: {
                padding: 20,
                overflow: 'auto'
            },
            buttonsDiv: {
                textAlign: 'center',
                padding: 10
            },
            flatButton: {
                color: grey500
            },
            checkRemember: {
                style: {
                    float: 'left',
                    maxWidth: 180,
                    paddingTop: 5
                },
                labelStyle: {
                    color: grey500
                },
                iconStyle: {
                    color: grey500,
                    borderColor: grey500,
                    fill: grey500
                }
            },
            loginBtn: {
                float: 'right'
            },
            btn: {
                background: '#4f81e9',
                color: white,
                padding: 7,
                borderRadius: 2,
                margin: 2,
                fontSize: 13
            },
            btnFacebook: {
                background: '#4f81e9'
            },
            btnGoogle: {
                background: '#e14441'
            },
            btnSpan: {
                marginLeft: 5
            },
        };

        return (
            <div>
                <div style={styles.loginContainer}>

                    <Paper style={styles.paper}>

                        <form onSubmit={this.onSubmit}>
                            <TextField
                                hintText="E-mail"
                                floatingLabelText="E-mail"
                                fullWidth={true}
                                onChange={this.onEmailChange}
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                fullWidth={true}
                                type="password"
                                onChange={this.onPasswordChange}
                            />
                            <div>
                                <Checkbox
                                    label="Remember me"
                                    style={styles.checkRemember.style}
                                    labelStyle={styles.checkRemember.labelStyle}
                                    iconStyle={styles.checkRemember.iconStyle}
                                />
                                <RaisedButton label="Login"
                                                primary={true}
                                                type="submit"
                                                style={styles.loginBtn}
                                />
                            </div>
                        </form>
                    </Paper>

                    <div style={styles.buttonsDiv}>
                        <FlatButton
                            label="Forgot Password?"
                            href="/"
                            icon={<Help />}
                            style={styles.flatButton}
                        />
                    </div>

                    
                </div>
            </div>

        );
    }
};

export default LoginPage;