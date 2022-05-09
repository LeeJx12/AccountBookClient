import { ACTION_LOGIN } from "./actionTypes";


export function actionLogin(loginId, passWd, autoLogin) {
    return {
        type: ACTION_LOGIN,
        loginId: loginId,
        passWd: passWd,
        autoLogin: autoLogin
    }
}