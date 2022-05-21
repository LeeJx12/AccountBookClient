import { MainPage } from "../app/components/MainPage";
import { LOGIN_FAIL_AUTH_FAIL, LOGIN_FAIL_USER_NOT_FOUND, LOGIN_RESULT_SUCCESS } from "../common/constants";
import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { setSessionUser } from "./actions";
import { ACTION_LOGIN } from "./actionTypes";


MiddlewareRegistry.register(store => next => action => {
    const { dispatch, getState } = store;

    switch(action.type) {
        case ACTION_LOGIN: {
            doLogin(store, action);
            break;
        }
    }

    return next(action);
})

function doLogin(store, action) {
    const state = store.getState();
    const { dispatch } = store;
    const stateFul = state[`leejx2/accountbook/app`];
    const url = stateFul.url;
    const loginId = action.loginId;
    const passWd = action.passWd;

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
                //TODO: 팝업처리 추가할것!
                alert("사용자가 없습니다!");
            }
            //비밀번호 틀렸을때
            if (LOGIN_FAIL_AUTH_FAIL === data.loginFailMessage) {
                //TODO: 팝업처리 추가할것!
                alert("비밀번호를 확인하세요!");
            }
        }

    }).catch(console.error);
}