import { ACTION_LOGIN, ACTION_LOGOUT, SET_SESSION_USER } from "./actionTypes";


export function actionLogin(loginId, passWd, autoLogin) {
    return {
        type: ACTION_LOGIN,
        loginId: loginId,
        passWd: passWd,
        autoLogin: autoLogin
    }
}

export function actionLogout() {
    return { type: ACTION_LOGOUT }
}

export function setSessionUser(sessionUser) {
    return {
        type: SET_SESSION_USER,
        sessionUser: sessionUser
    }
}