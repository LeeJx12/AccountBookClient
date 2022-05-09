import PersistenceRegistry from "../redux/PersistenceRegistry";
import ReducerRegistry from "../redux/ReducerRegistry";
import Encryptor from "../common/encryptor";
import _ from "lodash";
import { APP_SCHEME_NAME } from "../common/constants";

function _getInitialState() {
    let persistedState = PersistenceRegistry.getPersistedState();
    persistedState = persistedState ? persistedState[`${APP_SCHEME_NAME}/login`] : persistedState;

    const autoLogin = persistedState?.autoLogin;
    const loginId = autoLogin ? persistedState?.loginId : '';
    let passWd = autoLogin ? persistedState?.passWd : '';
    if (!_.isEmpty(passWd)) passWd = Encryptor.decrypt(passWd);

    return {
        autoLogin,
        loginId,
        passWd
    }
}

PersistenceRegistry.register(`${APP_SCHEME_NAME}/login`, {
    autoLogin: true,
    loginId: true,
    passWd: true
})

ReducerRegistry.register(`${APP_SCHEME_NAME}/login`, (state = _getInitialState(), action) => {
    // switch (action.type) {
        
    // }

    return {
        ...state
    }
});