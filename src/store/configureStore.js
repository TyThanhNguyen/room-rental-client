import { createStore, combineReducers } from "redux";
import collegeReducer from '../reducers/collegeReducer';
import placeListReducer from '../reducers/placeListReducer';
import placeDetailsReducer from '../reducers/placeDetailsReducer';

export default () => {
    const store = createStore(
        combineReducers({
            college: collegeReducer,
            placeList: placeListReducer,
            placeDetails: placeDetailsReducer
        })
    );
    
    return store;
}