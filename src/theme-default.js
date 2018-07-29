import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white, transparent } from 'material-ui/styles/colors';
import spacing from 'material-ui/styles/spacing';

const themeDefault = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
  },
  appBar: {
    height: 57,
    color: '#4c4c4c',
  },
  flatButton: {
    textTransform: 'none',
    textColor: white,
    fontSize: '1rem',
  },
  slider: {
    trackColor: '#c8c9cb',
    selectionColor: '#8E24AA',
    handleSize: 25,
    trackSize: 6,
  },
  fontAwesomeIcon: {
    color: '#D500F9'
  }
});


export default themeDefault;