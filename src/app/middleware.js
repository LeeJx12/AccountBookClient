import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { APP_WILL_MOUNT } from "./actionTypes";
import { Login } from "../login";

MiddlewareRegistry.register(store => next => action => {
    const { dispatch, getState } = store;

    switch(action.type) {
        case APP_WILL_MOUNT: {
            getState()[`leejx2/accountbook/app`].app?._navigate({
                component: Login,
                props: store
            });
            break;
        }
    }

    return next(action);
})