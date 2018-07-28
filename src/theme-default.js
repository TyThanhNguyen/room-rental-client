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
    color: transparent,
  },
  flatButton: {
    textTransform: 'none',
    textColor: white,
    fontSize: '1rem',
  },
});


export default themeDefault;