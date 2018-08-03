import { createStore, combineReducers } from "redux";
import collegeReducer from '../reducers/collegeReducer';
import placeListReducer from '../reducers/placeListReducer';

export default () => {
    const store = createStore(
        combineReducers({
            college: collegeReducer,
            placeList: placeListReducer,
        })
    );
    
    return store;
}