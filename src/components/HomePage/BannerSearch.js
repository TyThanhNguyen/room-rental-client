import React from 'react';
import TextField from 'material-ui/TextField';
import {white, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton'
import Search from 'material-ui/svg-icons/action/search';


const BannerSearch = () => {

  const styles = {
    searchBanner: {
      position: 'relative'
    },
    textField: {
      backgroundColor: white,
      height: 60,
    },
    inputStyle: {
      color: '#4c4c4c',
      paddingLeft: 5,
      fontWeight: 300,
      fontSize: '1.125rem',
      
    },
    hintStyle: {
      paddingLeft: 6,
      color: '#4c4c4c',
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      with: '100%',
      height: '2rem',
      fontWeight: 300,
      float: 'left'
    },
    searchBar: {
      position: 'absolute',
      top: '60%',
      width: '100%',
    },
    searchBar_form: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    form: {
      margin: '0 auto',
      borderRadius: '2px',
      display: 'flex'
    },
    searchButton: {
      display: 'flex',
    },
    slice_desktop: {
      backgroundImage: 'url(' + require('../../images/headerbg.jpg') + ')',
      height: '39rem',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat'
    },
    textBanner: {
      div: {
        position: 'absolute',
        top: '32%',
        width: '100%',
        textAlign: 'center'
      },
      h1: {
        fontSize: '2.5rem',
        lineHeight: '3.5rem',
        fontWeight: 500,
        marginBottom: '.5rem',
        whiteSpace: 'nowrap',
        color: 'white',
      },
      h2: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        fontWeight: 400,
        color: 'white'
      }
    },
    searchFlatButton: {
      height: '100%',
      backgroundColor: 'purple'
    },
    searchIconWrap: {
      backgroundColor: 'white'
    },
    searchIcon: {
      height: '100%',
      width: 30,
      paddingLeft: 10
    }
  };

  return (
    <section style={styles.searchBanner}>
      <div>
        <div style={styles.textBanner.div}>
          <h1 style={styles.textBanner.h1}>Student accomodation made easy</h1>
          <h2 style={styles.textBanner.h2}>Book your perfect home in Singapore</h2>
        </div>
        <div style={styles.slice_desktop}>
        </div>
      </div>
      <div style={styles.searchBar}>
        <div style={styles.searchBar_form}>
            <form style={styles.form}>
              <div style={styles.searchIconWrap}>
                <Search
                  style={styles.searchIcon}
                  color="purple"
                />
              </div>
              <TextField
                underlineShow={false}
                fullWidth={true}
                hintText="Search by university"
                style={styles.textField}
                inputStyle={styles.inputStyle}
                hintStyle={styles.hintStyle}
              />
              <div style={styles.searchButton}>
                <FlatButton
                  style={styles.searchFlatButton}
                  label="Search"/>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default BannerSearch;
