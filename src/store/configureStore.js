import { createStore, combineReducers } from "redux";
import UpdateHeaderBackground from '../actions/HeaderBackground';

export default () => {
    const store = createStore(
        combineReducers({
            updateHeaderBackground: UpdateHeaderBackground,
        })
    );
    
    return store;
}