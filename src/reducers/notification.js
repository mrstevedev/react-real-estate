const notificationReducer = (state = 'hide', action) => {
    switch(action.type) {
        case 'CLOSE_NOTIFICATION_ASYNC':
            return state = 'hide'
        case 'SHOW_NOTIFICATION_ASYNC':
            return state = 'show'
        default:
            return state;
    }
}
export default notificationReducer;