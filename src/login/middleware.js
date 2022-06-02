import { MainPage } from "../app";
import { fetchToSvr, hideProgressLayer, messagePop } from "../common";
import { LOGIN_FAIL_AUTH_FAIL, LOGIN_FAIL_USER_NOT_FOUND, LOGIN_RESULT_SUCCESS, MODAL_TYPE_ALERT } from "../common/constants";
import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { setSessionUser } from "./actions";
import { ACTION_LOGIN, ACTION_LOGOUT } from "./actionTypes";
import { Login } from "./components";


MiddlewareRegistry.register(store => next => action => {
    const { dispatch, getState } = store;

    switch(action.type) {
        case ACTION_LOGIN: {
            doLogin(store, action);
            break;
        }
        case ACTION_LOGOUT: {
            doLogout(store);
            break;
        }
    }

    return next(action);
})

function doLogin(store, action) {
    const state = store.getState();
    const { dispatch } = store;

    const stateFul = state[`leejx2/accountbook/app`];
    const loginId = action.loginId;
    const passWd = action.passWd;

    fetchToSvr('/login', 'POST', {
        loginId: loginId,
        passwd: passWd
    }).then(data => {
        hideProgressLayer(dispatch);

        //로그인 후
        if (LOGIN_RESULT_SUCCESS === data.loginResult) {
            //세션 저장
            dispatch(setSessionUser(data));

            //메인페이지 이동
            stateFul.app._navigate({
                component: MainPage,
                props: store
            })
        } else {
            //사용자 없을때
            if (LOGIN_FAIL_USER_NOT_FOUND === data.loginFailMessage) {
                messagePop(dispatch, MODAL_TYPE_ALERT, '존재하지 않는 사용자입니다!');
            }
            //비밀번호 틀렸을때
            if (LOGIN_FAIL_AUTH_FAIL === data.loginFailMessage) {
                messagePop(dispatch, MODAL_TYPE_ALERT, '비밀번호를 확인하세요!');
            }
        }

    }).catch(e => {
        hideProgressLayer(dispatch);
        messagePop(dispatch, MODAL_TYPE_ALERT, '연결에 실패했습니다!');
    });
}

function doLogout(store) {
    const state = store.getState();
    const stateFul = state[`leejx2/accountbook/app`];
    stateFul.app._navigate({
        component: Login,
        props: store
    })
}