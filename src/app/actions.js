import { APP_WILL_MOUNT, APP_WILL_UNMOUNT } from "./actionTypes"

/**
 * React app will mount event
 * @param {*} app 
 * @returns 
 */
export function appWillMount(app) {
    return (dispatch) => {
        dispatch({
            type: APP_WILL_MOUNT,
            app
        })
    }
}

/**
 * React app will unmount event
 * @param {*} app 
 * @returns 
 */
export function appWillUnmount(app) {
    return {
        type: APP_WILL_UNMOUNT,
        app
    }
}