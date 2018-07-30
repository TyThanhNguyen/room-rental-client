import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import getImage from '../../utils/importImages';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import {Link} from 'react-router';



class UniversityBanner extends React.Component {

  tileClick = (e) => {
    console.log('it is work');
  }

  render(){
    const styles = {
      root: {
      },
      title: {
        div: {
            width: '100%',
            textAlign: 'center',
            marginTop: 60,
            marginBottom: 30
        },
        h2: {
            fontSize: '2rem',
            color: '#4c4c4c',
            lineHeight: '3rem',
            fontWeight: 200
        }
      },
      gridList: {
        width: 1000,
        height: 1000,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      gridTile: {
        borderRadius: 2,
        cursor: 'pointer'
      },
      gridTile_title: {
        fontWeight: 500,
        fontSize: '1.2rem'
      },
      viewAllBtn: {
          div: {
            marginTop: '20px',
            width: '1000px',
            height: '40px',
            marginBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center'
          },
          flatBtn: {
            backgroundColor: '#8E24AA',
            width: '31.3%',
            height: 50
          }
      }
    };

    const universityData = [
      {
        img: 'uni01',
        title: 'Informatics Academy',
      },
      {
        img: 'uni02',
        title: 'Tasty burger',
      },
      {
        img: 'uni03',
        title: 'Camera',
      },
      {
        img: 'uni04',
        title: 'Morning',
      },
      {
        img: 'uni05',
        title: 'Hats',
      },
      {
        img: 'uni06',
        title: 'Honey',
      },
      {
        img: 'uni07',
        title: 'Vegetables',
      },
      {
        img: 'uni08',
        title: 'Water plant',
      },
      {
        img: 'uni09',
        title: 'Water plant',
      },
      {
        img: 'uni10',
        title: 'Morning',
      },
      {
        img: 'uni11',
        title: 'Water plant',
      },
      {
        img: 'uni12',
        title: 'Morning',
      },
      
    ];

    return (
      <div>
        <div style={styles.title.div}>
            <h2 style={styles.title.h2}>Explore by Universities/Colleges</h2>
        </div>
        <div>
            <GridList
                cols={3}
                cellHeight={220}
                padding={26}
                style={styles.gridList}
            >
            {universityData.map((tile) => (
              <Link 
                to={{
                  pathname: `${tile.title}`,
                  state: {
                    title: tile.title
                  }
                }}
              >
                <GridTile
                    style={styles.gridTile}
                    key={tile.img}
                    title={tile.title}
                    titleStyle={styles.gridTile_title}
                    onTouchTap={this.tileClick}
                    >
                    <img src={getImage(tile.img)} />
                </GridTile>
              </Link>
            ))}   
            </GridList>
        </div>
        <div style={styles.viewAllBtn.div}>
            <FlatButton
                style={styles.viewAllBtn.flatBtn}
                label="View All"
            />
        </div>
      </div>
    )
  }
};

export default UniversityBanner;