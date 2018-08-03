export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_COLLEGE':
            console.log('abc')
            return [
                ...state,
                action.college
            ];
        default: 
            return state;
    }
}