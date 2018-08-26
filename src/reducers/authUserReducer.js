export default (state = '', action) => {
    switch(action.type) {
        case 'ADD_AUTHORIZED_USER':
            return {
                ...state, ...action.auth
            }
        default:
            return state;
    }
};