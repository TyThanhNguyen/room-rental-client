export const addPlaceDetails = ({
    image,
    room,
    facilities,
    billIncluded,
    securityAndSafety,
    propertyRule,
    placeId,
    address,
    description,
    name
}) => ({
    type: 'ADD_PLACEDETAILS',
    placeDetails: {
        image,
        room,
        facilities,
        billIncluded,
        securityAndSafety,
        propertyRule,
        placeId,
        address,
        description,
        name
    }
});