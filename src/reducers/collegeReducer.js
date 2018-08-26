export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_COLLEGE':
            return [
                ...state,
                action.college
            ];
        default: 
            return state;
    }
}