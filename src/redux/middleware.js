import _ from 'lodash';
import MiddlewareRegistry from './MiddlewareRegistry';
import PersistenceRegistry from './PersistenceRegistry';

const PERSIST_STATE_DELAY = 2000;

/**
 * redux middleware 처리
 */
MiddlewareRegistry.register(store => next => action => {
    const oldState = toState(store);
    const result = next(action);
    const newState = toState(store);

    oldState === newState || throttledPersistState(newState);

    return result;
});

/**
 * @PERSIST_STATE_DELAY
 * 저장소 접근 횟수 제한을 위해 사용
 */
export const throttledPersistState
    = _.throttle(
        state => PersistenceRegistry.persistState(state),
        PERSIST_STATE_DELAY);

function toState(stateful) {
    if (stateful) {
        if (typeof stateful === 'function') {
            return stateful();
        }

        const { getState } = stateful;

        if (typeof getState === 'function') {
            return getState();
        }
    }

    return stateful;
}