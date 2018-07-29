import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class FilterOption extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {

    const styles = {
        wrapper: {
            backgroundColor: '#E1BEE7',
            width: '35%',
        },

    }
    return (
      <DropDownMenu 
        value={this.state.value} 
        onChange={this.handleChange} 
        openImmediately={false}
        style={styles.wrapper}
        underlineStyle={{display: 'none'}}
        menuStyle={{paddingLeft: 0,}}
        labelStyle={{paddingLeft: 10, lineHeight: 3.5, color: '#9C27B0', fontWeight: 600}}
        iconStyle={{paddingRight: 0}}
      >
        <MenuItem value={1} primaryText="Distance to university" />
        <MenuItem value={2} primaryText="Price low to high" />
        <MenuItem value={3} primaryText="Price high to low" />
      </DropDownMenu>
    );
  }
}