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

/**
 * 'yyyy-MM-dd hh:mm:ss' format에 따라 날짜 형식 반환
 * @param {*} date 
 * @param {*} format 
 */
export function getDateStr(date, format) {
    const year =    date.getFullYear();
    const month =   ((date.getMonth() + 1) + '').padStart(2, '0'); 
    const day =     (date.getDate() + '').padStart(2, '0'); 
    const hour =    (date.getHours() + '').padStart(2, '0'); 
    const minute =  (date.getMinutes() + '').padStart(2, '0'); 
    const second =  (date.getSeconds() + '').padStart(2, '0'); 

    format = format.replace('yyyy', year);
    format = format.replace('MM', month);
    format = format.replace('dd', day);
    format = format.replace('hh', hour);
    format = format.replace('mm', minute);
    format = format.replace('ss', second);

    return format;
}