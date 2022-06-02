import { showProgressLayer, TAB_TYPE_DETAIL } from "../common";
import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { ACTION_CHANGE_TAB } from "../tab";

MiddlewareRegistry.register(store => next => action => {
    const { dispatch, getState } = store;

    switch(action.type) {
        case ACTION_CHANGE_TAB: {
            openDetailTab(getState(), dispatch, action.tab);
            break;
        }
    }

    return next(action);
})

function openDetailTab(state, dispatch, tab) {
    if (TAB_TYPE_DETAIL === tab) {
        showProgressLayer(dispatch);

        const user = state[`leejx2/accountbook/login`].sessionUser;
        const userId = user.userId;
    }
}