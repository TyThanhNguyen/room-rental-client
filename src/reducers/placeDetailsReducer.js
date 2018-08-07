export default (state = {}, action) => {
    switch(action.type) {
        case 'ADD_PLACEDETAILS':
            return {
                ...state, ...action.placeDetails
            }
        default: 
            return state;
    }
}