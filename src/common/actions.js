import { HIDE_MODAL_POPUP, SHOW_MODAL_POPUP } from './actionTypes';

export function showModalPopup(modalType, body, callbackFn) {
    return {
        type: SHOW_MODAL_POPUP,
        modalType: modalType,
        body: body,
        callbackFn: callbackFn
    }
}

export function hideModalPopup() {
    return { type: HIDE_MODAL_POPUP };
}