import PersistenceRegistry from "../redux/PersistenceRegistry";
import ReducerRegistry from "../redux/ReducerRegistry";
import Encryptor from "../common/encryptor";
import _ from "lodash";
import { ACTION_LOGIN, SET_SESSION_USER } from "./actionTypes";

function _getInitialState() {
    let persistedState = PersistenceRegistry.getPersistedState();
    persistedState = persistedState ? persistedState[`leejx2/accountbook/login`] : persistedState;

    const autoLogin = persistedState?.autoLogin;
    const loginId = autoLogin ? persistedState?.loginId : '';
    let passWd = autoLogin ? persistedState?.passWd : '';
    if (!_.isEmpty(passWd)) passWd = Encryptor.decrypt(passWd);

    return {
        autoLogin,
        loginId,
        passWd,
        sessionUser: {},
    }
}

PersistenceRegistry.register(`leejx2/accountbook/login`, {
    autoLogin: true,
    loginId: true,
    passWd: true
})

ReducerRegistry.register(`leejx2/accountbook/login`, (state = _getInitialState(), action) => {
    switch (action.type) {
        case ACTION_LOGIN: { 
            state.loginId = action.loginId;
            state.passWd = action.passWd;
            state.autoLogin = action.autoLogin;
            break;
        }
        case SET_SESSION_USER: {
            state.sessionUser = action.sessionUser;
            break;
        }
    }

    return {
        ...state
    }
});