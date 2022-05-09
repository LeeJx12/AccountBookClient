import Encryptor from "../common/encryptor";
import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { ACTION_LOGIN } from "./actionTypes";


MiddlewareRegistry.register(store => next => action => {
    const { dispatch, getState } = store;

    switch(action.type) {
        case ACTION_LOGIN: {
            doLogin(getState(), action);
            break;
        }
    }

    return next(action);
})

function doLogin(state, action) {
    const stateFul = state[`leejx2/accountbook/app`];
    const url = stateFul.url;
    const loginId = action.loginId;
    const passWd = Encryptor.encrypt(action.passWd);
    console.log(passWd);

    fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            loginId: loginId,
            passwd: passWd
        })
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(console.error);
}