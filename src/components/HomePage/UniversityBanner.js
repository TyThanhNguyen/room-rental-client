import React, {PropTypes} from 'react';
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
        height: 800,
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
        title: 'James Cook University',
      },
      {
        img: 'uni03',
        title: 'National University of Singapore',
      },
      {
        img: 'uni04',
        title: 'Kaplan Singapore',
      },
      {
        img: 'uni05',
        title: 'Singapore Institute of Management (SIM)',
      },
      {
        img: 'uni06',
        title: 'LASALLE College of the Arts',
      },
      {
        img: 'uni07',
        title: 'Singapore University of Technology and Design',
      },
      {
        img: 'uni08',
        title: 'PSB Academy Singapore',
      },
      {
        img: 'uni09',
        title: 'TMC Academy',
      },
      
    ];

    const { college } = this.props;

    return (
      <div>
        <div style={styles.title.div}>
            <h2 style={styles.title.h2}>Explore by Universities/Colleges</h2>
        </div>
        <div>
            <GridList
                cols={3}
                cellHeight={240}
                padding={26}
                style={styles.gridList}
            >
            {college.map((item) => (
              <Link 
                to={{
                  pathname: `${item.name}`,
                  state: {
                    title: item.name,
                  }
                }}
              >
                <GridTile
                    style={styles.gridTile}
                    key={item.name}
                    title={item.name}
                    titleStyle={styles.gridTile_title}
                    onTouchTap={this.tileClick}
                    >
                    <img src={item.imagePath} />
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

UniversityBanner.propTypes = {
  college: PropTypes.object
}

export default UniversityBanner;