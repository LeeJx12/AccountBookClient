import { hideProgressLayer, messagePop, MODAL_TYPE_ALERT, showProgressLayer, TAB_TYPE_SETTING } from "../common";
import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { ACTION_CHANGE_TAB } from "../tab";
import { ACTION_SAVE_SETTING } from "./actionTypes";

MiddlewareRegistry.register(store => next => action => {
    const { dispatch, getState } = store;

    switch(action.type) {
        case ACTION_CHANGE_TAB: {
            openSettingTab(getState(), dispatch, action.tab);
            break;
        }
        case ACTION_SAVE_SETTING: {
            saveSettings(store, action);
            break;
        }
    }

    return next(action);
})

function openSettingTab(state, dispatch, tab) {
    if (TAB_TYPE_SETTING === tab) {
        showProgressLayer(dispatch);

        const user = state[`leejx2/accountbook/login`].sessionUser;
        const app = state[`leejx2/accountbook/app`];
        const url = app.url;
        const userId = user.userId;

        fetch(`${url}/rest/deposit/${userId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            hideProgressLayer(dispatch);

            state[`leejx2/accountbook/login`].deposits = data;
        }).catch(e => {
            hideProgressLayer(dispatch);

            messagePop(dispatch, MODAL_TYPE_ALERT, '연결에 실패했습니다!');
        });
    }
}

function saveSettings(store, action) {
    const { dispatch, getState } = store;
    const state = getState();

    const app = state[`leejx2/accountbook/app`];
    const user = state[`leejx2/accountbook/login`].sessionUser;
    const url = app.url;
    const userId = user.userId;

    const targetAmount      = action.targetAmount;
    const monthLife         = action.monthLife;
    const dayLife           = action.dayLife;
    const livExpDepositId   = action.livExpDepositId;

    fetch(`${url}/rest/user`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId,
            targetAmount: targetAmount,
            monthLife: monthLife,
            dayLife: dayLife,
            livExpDepositId: livExpDepositId
        })
    }).then(response => {
        hideProgressLayer(dispatch);
        console.log(response);
        messagePop(dispatch, MODAL_TYPE_ALERT, '저장되었습니다!');
    }).catch(e => {
        hideProgressLayer(dispatch);
        messagePop(dispatch, MODAL_TYPE_ALERT, '연결에 실패했습니다!');
    });
}