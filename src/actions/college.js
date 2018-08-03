export const addCollege = ({
    name = '',
    address = '',
    imagePath = ''
}) => ({
    type: 'ADD_COLLEGE',
    college: {
        name,
        address,
        imagePath
    }
});