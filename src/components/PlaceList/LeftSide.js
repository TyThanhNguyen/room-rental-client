import React from 'react';
import Checkbox from 'material-ui/Checkbox/Checkbox';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Slider from 'material-ui/Slider/Slider';

class LeftSide extends React.Component {

    state = {
        priceRange: 3000,
    }

    handlePriceRangeSlider = (event, value) => {
        this.setState({priceRange: value});
    }

    render(){
        const propertyList = [
            {
                name: 'Room',
                property: [
                    'Sharing room',
                    'Single room',
                    'Master room'
                ]
            },
            {
                name: 'Bath room',
                property: [
                    'Private',
                    'Shared'
                ]
            },
            {
                name: 'Room',
                property: [
                    'Sharing room',
                    'Single room',
                    'Master room'
                ]
            },
            {
                name: 'Bath room',
                property: [
                    'Private',
                    'Shared'
                ]
            },
            {
                name: 'Room',
                property: [
                    'Sharing room',
                    'Single room',
                    'Master room'
                ]
            },
            {
                name: 'Bath room',
                property: [
                    'Private',
                    'Shared'
                ]
            }
        ]
        
        const styles = {
            aside: {
                width: '23%',
                float: 'left',
                position: 'relative'
            },
            div: {
                padding: 8
            },
            h5: {
                paddingBottom: 10,
                color: '#4c4c4c',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                fontWeight: 500,
            },
            checkbox: {
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                padding: '0.2rem 0'

            },
            priceRange: {
                wrap: {
                    padding: 8,
                    width: '90%',
                    paddingTop: 30
                },
                slider: {
                    marginTop: 0,
                    marginBottom: 0,
                },
                priceLabel: {
                    display: 'flex',
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative'
                },
                p_left: {
                    position: 'absolute',
                    left: '0%',
                    marginBottom: 0,
                    color: '#4c4c4c',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    // fontWeight: 500,
                },
                p_middle: {
                    verticalAlign: 'middle',
                    width: '100%',
                    marginBottom: 0,
                    color: '#4c4c4c',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    // fontWeight: 500,
                },
                p_right: {
                    position: 'absolute',
                    right: '0%',
                    marginBottom: 0,
                    color: '#4c4c4c',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    // fontWeight: 500,
                },
            }
        }

        return (
            <aside style={styles.aside}>
                {/* price range */}
                <div style={styles.priceRange.wrap}>
                    <h5 style={styles.h5}>Price Range</h5>
                    <Slider
                        min={150}
                        max={4000}
                        step={1}
                        defaultValue={500}
                        value={this.state.priceRange}
                        onChange={this.handlePriceRangeSlider}
                        sliderStyle={styles.priceRange.slider}
                    />
                    <div style={styles.priceRange.priceLabel}>
                        <p style={styles.priceRange.p_left}>$150</p>
                        <p style={styles.priceRange.p_middle}>${this.state.priceRange}</p>
                        <p style={styles.priceRange.p_right}>$4000</p>
                    </div>
                    
                </div>
                {/* checkbox part */}
                {propertyList.map((element, index) => {
                    return (
                        <div style={styles.div}>
                            <h5 style={styles.h5}>{element.name}</h5>
                            {element.property.map((item, index) => {
                                return (
                                    <Checkbox
                                        style={styles.checkbox}
                                        labelStyle={{color: '#4c4c4c'}}
                                        iconStyle={{fill: '#4c4c4c'}}
                                        key={index}
                                        label={item}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </aside>
        )
    }
};

export default LeftSide;