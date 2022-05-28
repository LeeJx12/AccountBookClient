import { TAB_TYPE_SUMMARY } from "../common/constants";
import { ACTION_LOGOUT } from "../login";
import ReducerRegistry from "../redux/ReducerRegistry";
import { ACTION_CHANGE_TAB } from "./actionTypes";

function _getInitialState() {
    return {
        tab: TAB_TYPE_SUMMARY,
    }
}

ReducerRegistry.register(`leejx2/accountbook/tab`, (state = _getInitialState(), action) => {
    switch(action.type) {
        case ACTION_CHANGE_TAB: {
            state.tab = action.tab;
            break;
        }
        case ACTION_LOGOUT: {
            state = _getInitialState();
            break;
        }
    }
    return state;
});