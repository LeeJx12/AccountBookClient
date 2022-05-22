import { hideProgress, showModalPopup, showProgress } from "./actions";

/**
 * alert, confirm 메시지 팝업
 * @param {*} dispatch 
 * @param {*} type 
 * @param {*} title 
 * @param {*} body 
 * @param {*} callbackFn 
 */
export function messagePop(dispatch, type, body, callbackFn) {
    dispatch(showModalPopup(type, body, callbackFn));
}
/**
 * 프로그레스 레이어 show
 * @param {*} dispatch 
 */
export function showProgressLayer(dispatch) {
    dispatch(showProgress());
}

/**
 * 프로그레스 레이어 hide
 * @param {*} dispatch 
 */
export function hideProgressLayer(dispatch) {
    dispatch(hideProgress());
}