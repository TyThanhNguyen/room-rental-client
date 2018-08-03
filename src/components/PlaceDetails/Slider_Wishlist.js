import React, {PropTypes} from 'react';
import { FlatButton } from 'material-ui';
import { RadioButton } from 'material-ui';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {GridList, GridTile} from 'material-ui/GridList';


class Slider_Wishlist extends React.Component {
    render() {
        const {placeName} = this.props
        const styles = {
            wrapper: {
                width: '100%',
                display: 'flex',

            },
            leftPart: {
                width: '35%',
            },
            rightPart: {
                width: '65%'
            },
            ul01: {
                paddingTop: 100,
                marginBottom: 20
            },
            ul02: {
                display: 'flex',
                paddingLeft: 0
            },
            placeName: {
                fontSize: '2.5rem',
                lineHeight: '3rem',
                fontWeight: 600,
                color: '#4c4c4c',
                marginBottom: 10
            },
            rate: {
                fontSize: '1.3rem',
                marginBottom: 10
            },
            rateValue: {
                marginBottom: 10,
                color: '#8E24AA',
                fontSize: '2.0rem',
                fontWeight: 600
            },
            review: {
                marginBottom: 10
            },
            radioButton: {
                marginBottom: 10,
                marginTop: 30
            },
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            },
            gridList: {
              display: 'flex',
              flexWrap: 'nowrap',
              overflowX: 'auto',
            },


        };
          
        const imgData = ['p01.jpeg', 'p02.jpeg', 'p03.jpeg', 'p04.jpeg', 'p05.jpeg', 'p06.jpeg', 'p07.jpeg', 'p08.jpeg'];

        return (
            <section style={styles.wrapper}>
                <div style={styles.leftPart}>
                    <ul style={styles.ul01}>
                        <li style={styles.placeName}>{placeName}</li>
                        <li>
                            <ul style={styles.ul02}>
                                <li style={styles.rate}>Rate:</li>
                                <li style={styles.rateValue}>8.0</li>
                                <li>(20 reviews)</li>
                            </ul>
                        </li>
                        <li style={styles.radioButton}>
                            <RadioButton
                                value="ludicrous"
                                label="Add To Wish List"
                                checkedIcon={<ActionFavorite />}
                                uncheckedIcon={<ActionFavoriteBorder />}
                                iconStyle={{width: 50, height: 50}}
                                labelStyle={{paddingTop: 12}}
                                checked={true}
                            />
                        </li>
                    </ul>
                </div>
                <div style={styles.rightPart}>
                    <div style={styles.root}>
                        <GridList style={styles.gridList} cellHeight="400" cols={1}>
                        {imgData.map((img) => (
                            <GridTile
                                style={{width: '790'}}
                                key={img}
                            >
                                <img src={`/${require(`../../images/${img}`)}`}  />
                            </GridTile>
                        ))}
                        </GridList>
                    </div>
                </div>
            </section>
        )
    }
}
Slider_Wishlist.propTypes = {
    placeName: PropTypes.string
}


export default Slider_Wishlist;