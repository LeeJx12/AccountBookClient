import ReducerRegistry from "../redux/ReducerRegistry";
import { SET_DEPOSITS } from "./actionTypes";

function _getInitialState() {
    return {
        deposits: []
    }
}

ReducerRegistry.register(`leejx2/accountbook/deposit`, (state = _getInitialState(), action) => {
    switch (action.type) {
        case SET_DEPOSITS: {
            state.deposits = action.deposits;
            break;
        }
    }

    return {
        ...state
    }
})