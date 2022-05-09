/* @flow */

import { applyMiddleware } from 'redux';

/**
 * @link http://redux.js.org/docs/api/applyMiddleware.html
 */
class MiddlewareRegistry {
    constructor() {
        this._elements = [];
    }

    /**
     * 
     * @param  {...any} additional 서드파티 모듈이 필요한 경우 추가
     * @returns 
     */
    applyMiddleware(...additional) {
        return applyMiddleware(...this._elements, ...additional);
    }

    register(middleware) {
        this._elements.push(middleware);
    }
}

export default new MiddlewareRegistry();
