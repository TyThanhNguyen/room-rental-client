import React, {PropTypes} from 'react';
import AutoCompleteSearchBox from './AutoCompleteSearchBox';
import FilterOption from './FitlterOption';
import SinglePlaceItem from '../Common/SinglePlaceItem';

class MainList extends React.Component {
    render () {
        const {university} = this.props;
        const styles = {
            section: {
                width: '77%',
                position: 'relative',
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
                    <SinglePlaceItem university={university}/>
                </div>
            </section>
        );
    }
};

MainList.propTypes = {
    university: PropTypes.string
}

export default MainList;