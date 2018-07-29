import React from 'react';
import AutoCompleteSearchBox from './AutoCompleteSearchBox';
import FilterOption from './FitlterOption';
import SinglePlaceItem from '../Common/SinglePlaceItem';

class MainList extends React.Component {
    
    render () {
        const styles = {
            section: {
                width: '77%',
                float: 'right',
                position: 'relative',
                height: 500
            },
            wrapper: {
                width: '90%',
                margin: 'auto',
                marginTop: 20,
            },
            searchBox_filter: {
                display: 'flex'
            },
            searchBox: {
                textField: {
                    border: '1px solid black'
                }
            }
        }
        return (
            <section style={styles.section}>
                <div style={styles.wrapper}>
                    <div style={styles.searchBox_filter}>
                        <AutoCompleteSearchBox/>
                        <FilterOption/>
                    </div>
                    <SinglePlaceItem/>
                </div>
            </section>
        );
    }
};

export default MainList;