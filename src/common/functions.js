import _, { uniqueId } from "lodash";
import ReactDOM from 'react-dom/client';
import { hideLayerPopup, hideProgress, showLayerPopup, showModalPopup, showProgress } from "./actions";
import { Layer } from "./components/Layer";
import { APP_SERVER_URL } from "./constants";

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

/**
 * Input 금액 한글처리
 * @param {} num 
 * @returns 
 */
export function getMountHelper(num) {
    let helper = '';
    let numStr = num + '';

    if ( numStr.length >= 9 ) {
        helper = Number(numStr.substring(0, numStr.length - 8)).toLocaleString() + '억 ';
        numStr = numStr.substring(numStr.length - 8, numStr.length);
    }

    num = Number(numStr);
    numStr = num + '';

    if ( numStr.length >= 5 ) {
        helper += Number(numStr.substring(0, numStr.length - 4)).toLocaleString() + '만 ';
        numStr = numStr.substring(numStr.length - 4, numStr.length);
    }

    num = Number(numStr);
    helper += num !== 0 ? (num.toLocaleString() + '원') : (_.isEmpty(helper) ? '0원' : '원');

    return helper;
}

/**
 * fetch override
 * @param {*} path 
 * @param {*} method 
 * @param {*} params 
 */
export function fetchToSvr(path, method, params) {
    return new Promise((resolve, reject) => {
        const adds = {
            method: method,
            headers: {
                'content-type': 'application/json',
            }
        };

        if ('GET' !== method) {
            adds.body = params ? JSON.stringify(params) : '{}'
        }

        fetch(`${APP_SERVER_URL + path}`, adds)
        .then(response => response.json())
        .then(resolve)
        .catch(reject);
    });
}


export function showLayer(dispatch, component, title) {
    dispatch(showLayerPopup(title, component));
}

export function hideLayer(dispatch) {
    dispatch(hideLayerPopup());
}