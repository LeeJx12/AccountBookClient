import { APP_SERVER_URL } from "../common/constants";
import ReducerRegistry from "../redux/ReducerRegistry";
import { APP_WILL_MOUNT, APP_WILL_UNMOUNT } from "./actionTypes";

ReducerRegistry.register(`leejx2/accountbook/app`, (state = {}, action) => {
    switch(action.type) {
        case APP_WILL_MOUNT: {
            const { app } = action;

            if (state.app !== app) {
                return {
                    ...state,
                    url: APP_SERVER_URL,
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
