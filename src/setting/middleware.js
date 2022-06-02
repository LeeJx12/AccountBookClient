import { fetchToSvr, hideProgressLayer, messagePop, MODAL_TYPE_ALERT, showProgressLayer, TAB_TYPE_SETTING } from "../common";
import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { ACTION_SAVE_SETTING } from "./actionTypes";

MiddlewareRegistry.register(store => next => action => {
    const { dispatch, getState } = store;

    switch(action.type) {
        case ACTION_SAVE_SETTING: {
            saveSettings(store, action);
            break;
        }
    }

    return next(action);
})

function saveSettings(store, action) {
    const { dispatch, getState } = store;
    const state = getState();

    const user = state[`leejx2/accountbook/login`].sessionUser;
    const userId = user.userId;

    const targetAmount      = action.targetAmount;
    const monthLife         = action.monthLife;
    const dayLife           = action.dayLife;
    const livExpDepositId   = action.livExpDepositId;

    fetchToSvr(`/rest/user`, 'PUT', {
        userId: userId,
        targetAmount: targetAmount,
        monthLife: monthLife,
        dayLife: dayLife,
        livExpDepositId: livExpDepositId
    }).then(response => {
        messagePop(dispatch, MODAL_TYPE_ALERT, '저장되었습니다!');
    }).catch(e => {
        messagePop(dispatch, MODAL_TYPE_ALERT, '연결에 실패했습니다! ');
    }).finally(() => {
        hideProgressLayer(dispatch);
    })
}