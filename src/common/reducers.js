import { uniqueId } from "lodash";
import ReducerRegistry from "../redux/ReducerRegistry";
import { HIDE_MODAL_POPUP, HIDE_PROGRESS, SHOW_MODAL_POPUP, SHOW_PROGRESS } from './actionTypes';

function _getInitialState() {
    return {
        modal: {
            onShow: false,
            modalType: '',
            body: '',
            callbackFn: undefined
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
    }
    return {
        ...state
    }
});

function showModalPopup(state, action) {
    state.modal.onShow = true;
    state.modal.modalType = action.modalType;
    state.modal.body = action.body;
    state.modal.callbackFn = action.callbackFn;

    const backdrop = document.createElement("div");
    backdrop.classList.add('modal-backdrop', 'fade', 'show');
    document.body.appendChild(backdrop);
}

function hideModalPopup(state, action) {
    state.modal = _getInitialState();

    const backdrop = document.querySelector(".modal-backdrop.fade.show");
    backdrop.remove();
}