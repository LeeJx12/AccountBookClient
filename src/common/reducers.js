import { uniqueId } from "lodash";
import ReducerRegistry from "../redux/ReducerRegistry";
import { HIDE_LAYER_POPUP, HIDE_MODAL_POPUP, HIDE_PROGRESS, SHOW_LAYER_POPUP, SHOW_MODAL_POPUP, SHOW_PROGRESS } from './actionTypes';

function _getInitialState() {
    return {
        modal: {
            onShow: false,
            modalType: '',
            body: '',
            callbackFn: undefined
        },
        layer: {
            onShow: false,
            title: '',
            content: undefined
        },
        onProgress: false
    }
}

ReducerRegistry.register(`leejx2/accountbook/common`, (state = _getInitialState(), action) => {
    switch (action.type) {
        case SHOW_MODAL_POPUP: {
            showModalPopup(state, action);
            break;
        }
        case HIDE_MODAL_POPUP: {
            hideModalPopup(state, action);
            break;
        }
        case SHOW_PROGRESS: {
            state.onProgress = true;
            break;
        }
        case HIDE_PROGRESS: {
            state.onProgress = false;
            break;
        }
        case SHOW_LAYER_POPUP: {
            showLayerPopup(state, action);
            break;
        }
        case HIDE_LAYER_POPUP: {
            hideLayerPopup(state, action);
            break;
        }
    }
    return {
        ...state
    }
});

function showModalPopup(state, action) {
    state.modal.modalType = action.modalType;
    state.modal.body = action.body;
    state.modal.callbackFn = action.callbackFn;

    if (!state.modal.onShow) {
        state.modal.onShow = true;

        const backdrop = document.createElement("div");
        backdrop.classList.add('modal-backdrop', 'fade', 'show');
        document.body.appendChild(backdrop);
    }
}

function hideModalPopup(state, action) {
    state.modal = _getInitialState();

    const backdrop = document.querySelector(".modal-backdrop.fade.show");
    backdrop.remove();
}

function showLayerPopup(state, action) {
    state.layer.title = action.title;
    state.layer.content = action.content;
    state.layer.onShow = true;
}

function hideLayerPopup(state, action) {
    state.layer = _getInitialState().layer;
}