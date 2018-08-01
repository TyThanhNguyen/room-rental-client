import React, {PropTypes} from 'react';
import getImage from '../../utils/importImages';
import { FlatButton } from 'material-ui';
import {Link} from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWalking, faQuestionCircle, faBus, faCar, faMap, faReceipt } from '@fortawesome/free-solid-svg-icons'
import uni01 from '../../images/uni01.jpg'

class SinglePlaceItem extends React.Component {
    render() {
        const placeListData = [
            {
                img: 'uni01.jpg',
                details: {
                    placeName: 'Blk 12 Lorong 8',
                    rank: '8.0',
                    noReview: '14 reviews',
                    distance: {
                        walking: '60 min',
                        bus: '30 min',
                        driving: '15 min'
                    },
                    price: '$500',
                    typeRoom: 'Sharing room',
                    propertyOverview: [
                        'wifi', 'gym'
                    ],
                    billIncluded: [
                        'gas', 'wifi'
                    ]
                }
            },
            {
                img: 'uni01.jpg',
                details: {
                    placeName: 'Blk 12 Lorong 8',
                    rank: '8.0',
                    noReview: '14 reviews',
                    distance: {
                        walking: '60 min',
                        bus: '30 min',
                        driving: '15 min'
                    },
                    price: '$500',
                    typeRoom: 'Sharing room',
                    propertyOverview: [
                        'wifi', 'gym'
                    ],
                    billIncluded: [
                        'gas', 'wifi'
                    ]
                }
            },
            {
                img: 'uni01.jpg',
                details: {
                    placeName: 'Blk 12 Lorong 8',
                    rank: '8.0',
                    noReview: '14 reviews',
                    distance: {
                        walking: '60 min',
                        bus: '30 min',
                        driving: '15 min'
                    },
                    price: '$500',
                    typeRoom: 'Sharing room',
                    propertyOverview: [
                        'wifi', 'gym'
                    ],
                    billIncluded: [
                        'gas', 'wifi'
                    ]
                }
            },
            {
                img: 'uni01.jpg',
                details: {
                    placeName: 'Blk 12 Lorong 8',
                    rank: '8.0',
                    noReview: '14 reviews',
                    distance: {
                        walking: '60 min',
                        bus: '30 min',
                        driving: '15 min'
                    },
                    price: '$500',
                    typeRoom: 'Sharing room',
                    propertyOverview: [
                        'wifi', 'gym'
                    ],
                    billIncluded: [
                        'gas', 'wifi'
                    ]
                }
            },
            {
                img: 'uni01.jpg',
                details: {
                    placeName: 'Blk 12 Lorong 8',
                    rank: '8.0',
                    noReview: '14 reviews',
                    distance: {
                        walking: '60 min',
                        bus: '30 min',
                        driving: '15 min'
                    },
                    price: '$500',
                    typeRoom: 'Sharing room',
                    propertyOverview: [
                        'wifi', 'gym'
                    ],
                    billIncluded: [
                        'gas', 'wifi'
                    ]
                }
            },,
            {
                img: 'uni01.jpg',
                details: {
                    placeName: 'Blk 12 Lorong 8',
                    rank: '8.0',
                    noReview: '14 reviews',
                    distance: {
                        walking: '60 min',
                        bus: '30 min',
                        driving: '15 min'
                    },
                    price: '$500',
                    typeRoom: 'Sharing room',
                    propertyOverview: [
                        'wifi', 'gym'
                    ],
                    billIncluded: [
                        'gas', 'wifi'
                    ]
                }
            },
            {
                img: 'uni01.jpg',
                details: {
                    placeName: 'Blk 12 Lorong 8',
                    rank: '8.0',
                    noReview: '14 reviews',
                    distance: {
                        walking: '60 min',
                        bus: '30 min',
                        driving: '15 min'
                    },
                    price: '$500',
                    typeRoom: 'Sharing room',
                    propertyOverview: [
                        'wifi', 'gym'
                    ],
                    billIncluded: [
                        'gas', 'wifi'
                    ]
                }
            },
        ]

        const styles = {
            wrapper: {
                display: 'flex',
                marginTop: 20,
                backgroundColor: 'white',
            },
            ul: {
                display: 'flex',
            },
            link: {
                color: '#4c4c4c',
                textDecoration: 'none'
            },
            imgDiv: {
                div: {
                    width: '35%',
                    height: 200
                },
                img: {
                    height: '100%',
                    width: '100%'
                }
            },
            placeDiv: {
                div: {
                    width: '55%',
                    paddingTop: 20,
                    paddingBottom: 20
                },
                placeName: {
                    color: '#4c4c4c',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    marginBottom: '.5rem',
                    paddingLeft: 10
                },
                rank: {
                    fontSize: '0.875rem'
                },
                rankValue: {
                    fontSize: '1.5rem', 
                    fontWeight: 500, 
                    color: '#8E24AA'
                },
                noReview: {
                    fontSize: '0.875rem'
                },
                distance: {
                    fontSize: '.875rem', 
                    paddingTop: 20,
                },
                distanceItem: {

                },
                property: {
                    fontSize: '0.875rem',
                    paddingRight: 100
                },
                map: {
                    fontSize: '0.875rem',
                },
                icon: {
                    color: '#8E24AA'
                },
                iconPointer: {
                    cursor: 'pointer'
                }
            },
            viewRoomDiv: {
                div: {
                    width: '30%',
                    borderLeft: '1px solid #e7e7e7',
                    position: 'relative'
                },
                ul: {
                    marginTop: 10,
                    paddingLeft: 0
                },
                receipt: {
                    paddingLeft: 10,
                },
                price: {
                    color: '#4c4c4c',
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    fontWeight: 550,
                    textAlign: 'right',
                    paddingRight: 5
                },
                typeRoom: {
                    marginLeft: 5
                },
                viewBtn: {
                    width: '100%',
                    height: 40,
                    marginBottom: 0,
                    backgroundColor: '#38b2a6',
                    bottom: '0%',
                    position: 'absolute',
                    borderRadius: 0, 
                },
                label: {
                    fontWeight: 600
                },
                from: {
                    color: '#4c4c4c',
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    fontWeight: 550,
                    textAlign: 'right',
                    paddingRight: 5
                },
            }
        }
        const {university} = this.props;
        return (
            <div>
                {
                    placeListData.map((place, index) => {
                        return (
                            <div style={styles.wrapper}>
                                <div style={styles.imgDiv.div}>
                                    <Link to={{
                                        pathname: `${university}/${place.details.placeName}`,
                                        state: {
                                            university,
                                            placePath: `${university} / ${place.details.placeName}`
                                        }
                                    }}>
                                        <img style={styles.imgDiv.img} src={require(`../../images/${place.img}`)}/>
                                    </Link>
                                </div>
                                <div style={styles.placeDiv.div}>
                                    <ul>
                                        <li style={styles.placeDiv.placeName}>
                                            <Link
                                                style={styles.link}
                                                to={{
                                                    pathname: `${university}/${place.details.placeName}`
                                                }}
                                            >
                                                {place.details.placeName}
                                            </Link>
                                        </li>
                                        <ul style={styles.ul}>
                                            <li style={styles.placeDiv.rank}>Rate: </li>
                                            <li style={styles.placeDiv.rankValue}>{place.details.rank}</li>
                                            <li style={styles.placeDiv.noReview}>({place.details.noReview})</li>
                                        </ul>
                                        <li>
                                            <ul style={styles.ul}>
                                                <li style={styles.placeDiv.property}><FontAwesomeIcon icon={faQuestionCircle} style={styles.placeDiv.iconPointer}/> Property</li>
                                                <li style={styles.placeDiv.map}><FontAwesomeIcon icon={faMap} style={styles.placeDiv.iconPointer}/> Map</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul style={{...styles.ul, ...styles.placeDiv.distance}}>
                                                <li><FontAwesomeIcon icon={faWalking} style={styles.placeDiv.icon}/>{place.details.distance.walking}</li>
                                                <li><FontAwesomeIcon icon={faBus} style={styles.placeDiv.icon}/>{place.details.distance.bus}</li>
                                                <li><FontAwesomeIcon icon={faCar} style={styles.placeDiv.icon}/>{place.details.distance.driving}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div style={styles.viewRoomDiv.div}>
                                    <ul style={styles.viewRoomDiv.ul}>
                                        <li style={styles.viewRoomDiv.receipt}><FontAwesomeIcon icon={faReceipt} style={styles.placeDiv.iconPointer}/></li>
                                        <li style={styles.viewRoomDiv.from}>From</li>
                                        <li style={styles.viewRoomDiv.price}>{place.details.price}</li>
                                        <li>
                                            <Link to="">
                                                <FlatButton
                                                    style={styles.viewRoomDiv.viewBtn}
                                                    labelStyle={styles.viewRoomDiv.label}
                                                    label="View Rooms"
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
};

SinglePlaceItem.propTypes = {
    university: PropTypes.string
}

export default SinglePlaceItem;
