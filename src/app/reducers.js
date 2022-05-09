import { APP_SCHEME_NAME } from "../common/constants";
import ReducerRegistry from "../redux/ReducerRegistry";
import { APP_WILL_MOUNT, APP_WILL_UNMOUNT } from "./actionTypes";

import '../login/reducers';

ReducerRegistry.register(`${APP_SCHEME_NAME}/app`, (state = {}, action) => {
    switch(action.type) {
        case APP_WILL_MOUNT: {
            const { app } = action;

            if (state.app !== app) {
                return {
                    ...state,
                    app
                };
            }
            break;
        }
        case APP_WILL_UNMOUNT: {
            if (state.app === action.app) {
                return {
                    ...state,
                    app: undefined
                };
            }
            break;
        }
    }
    return state;
});
