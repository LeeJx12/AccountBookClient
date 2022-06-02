import { fetchToSvr, hideProgressLayer, showProgressLayer, TAB_TYPE_DETAIL } from "../common";
import { ACTION_LOGIN_AFTER } from "../login";
import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { ACTION_CHANGE_TAB } from "../tab";
import { setDeposits } from "./actions";

MiddlewareRegistry.register(store => next => action => {
    const { dispatch, getState } = store;

    switch(action.type) {
        case ACTION_LOGIN_AFTER: {
            getDeposits(getState(), dispatch);
            break;
        }
    }

    return next(action);
})

function getDeposits(state, dispatch) {
    showProgressLayer(dispatch);

    const stateFul = state[`leejx2/accountbook/deposit`];
    const user = state[`leejx2/accountbook/login`].sessionUser;
    const userId = user.userId;

    fetchToSvr(`/rest/deposit/${userId}`, 'GET')
    .then(data => {
        dispatch(setDeposits(data));
    })
    .catch(console.error)
    .finally(() => {
        hideProgressLayer(dispatch);
    })
}