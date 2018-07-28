const updateHeaderBackground = ({
    isInHomePage,
}) => ({
    type: 'CHANGE_HEADER_BG',
    urlStatus: {
        isInHomePage
    }
});