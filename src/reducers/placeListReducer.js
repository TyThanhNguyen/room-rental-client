export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLACELIST':
            return [
                ...state,
                action.placeList
            ];
        default: 
            return state;
    } 
}