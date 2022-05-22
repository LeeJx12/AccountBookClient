import { showModalPopup } from "./actions";

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