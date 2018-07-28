export default (state=[], action) => {
    switch(action, type) {
        case 'CHANGE_HEADER_BG':
            return {
                ...state,
                ...action.urlStatus
            }
        default:
            return state;
    }
}