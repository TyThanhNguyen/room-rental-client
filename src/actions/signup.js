export const addAuthorizedUser = ({
    accessType = '',
    token = '',
    email = ''
}) => ({
    type: 'ADD_AUTHORIZED_USER',
    auth: {
        accessType,
        token,
        email
    }
});