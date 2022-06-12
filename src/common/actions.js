import { HIDE_LAYER_POPUP, HIDE_MODAL_POPUP, HIDE_PROGRESS, SHOW_LAYER_POPUP, SHOW_MODAL_POPUP, SHOW_PROGRESS } from './actionTypes';

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

export function showProgress() {
    return { type: SHOW_PROGRESS };
}

export function hideProgress() {
    return { type: HIDE_PROGRESS };
}

export function showLayerPopup(title, content) {
    return {
        type: SHOW_LAYER_POPUP,
        title: title,
        content: content
    }
}

export function hideLayerPopup() {
    return { type: HIDE_LAYER_POPUP };
}