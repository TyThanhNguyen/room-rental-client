import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const colors = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Black',
    'White',
];

export default class AutoCompleteSearchBox extends React.Component {
    state = {
        searchText: '',
    };

    handleUpdateInput = (searchText) => {
        this.setState({ searchText });
    };

    render() {
        const styles = {
            searchBox: {
                border: '1px solid #8E24AA',
                width: '65%',
                position: 'relative',
            },
            menuStyle: {
                width: 490,
            },
            textField: {
                width: 490,
                marginBottom: -3,
            },
            hintStyle: {
                paddingLeft: 5
            },
            inputStyle: {
                paddingLeft: 5
            }
        }

        return (
            <AutoComplete
                hintText='Select university or college'
                searchText={this.state.searchText}
                onUpdateInput={this.handleUpdateInput}
                dataSource={colors}
                filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                openOnFocus={true}
                underlineShow={false}
                style={styles.searchBox}
                menuStyle={styles.menuStyle}
                fullWidth={true}
                textFieldStyle={styles.textField}
                hintStyle={styles.hintStyle}
                inputStyle={styles.inputStyle}
            />
        );
    }
}