export const addPlaceList = ({
    placeId,
    name,
    imagePaths,
    walking,
    bus,
    driving,
}) => ({
    type: 'ADD_PLACELIST',
    placeList: {
        placeId,
        name,
        imagePaths,
        walking,
        bus,
        driving,
    }
})