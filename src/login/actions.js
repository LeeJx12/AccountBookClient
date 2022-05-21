import { ACTION_LOGIN, SET_SESSION_USER } from "./actionTypes";


export function actionLogin(loginId, passWd, autoLogin) {
    return {
        type: ACTION_LOGIN,
        loginId: loginId,
        passWd: passWd,
        autoLogin: autoLogin
    }
}

export function setSessionUser(sessionUser) {
    return {
        type: SET_SESSION_USER,
        sessionUser: sessionUser
    }
}