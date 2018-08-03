export const addPlaceList = ({
    name,
    imagePaths,
    walking,
    bus,
    driving,
}) => ({
    type: 'ADD_PLACELIST',
    placeList: {
        name,
        imagePaths,
        walking,
        bus,
        driving,
    }
})