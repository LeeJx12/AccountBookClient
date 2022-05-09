import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from 'redux';
import Thunk from 'redux-thunk';
import PersistenceRegistry from '../../redux/PersistenceRegistry';
import MiddlewareRegistry from '../../redux/MiddlewareRegistry';
import StateListenerRegistry from '../../redux/StateListenerRegistry';
import ReducerRegistry from '../../redux/ReducerRegistry';
import { default as Login } from "../../login/components/Login";
import { appWillMount, appWillUnmount } from "../actions";
import _ from "lodash";

import '../reducers';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: {},
            store: undefined
        }
    }

    /**
     * 초기화
     */
    componentDidMount() {
        this._init = new Promise(resolve => {
            this.setState({
                store: this._createStore(),
                route: {
                    component: Login
                }
            }, resolve);
        }).then(() => this.state.store.dispatch(appWillMount(this)));
    }

    componentWillUnmount() {
        if ( this.state.store ) {
            this.state.store.dispatch(appWillUnmount(this));
        }
    }

    render() {
        const { route: { component, props }, store } = this.state;

        if (store) {
            return (
                <Provider store = { store }>
                    <Fragment>
                    { component && this._createMainElement(component, props) }
                    </Fragment>
                </Provider>
            )
        }

        return null;
    }

    _createMainElement(component, props) {
        return component ? React.createElement(component, props || {}) : null;
    }

    /**
     * 
     * @returns store
     */
    _createStore() {
        const reducer = ReducerRegistry.combineReducers();
        let middleware = MiddlewareRegistry.applyMiddleware(Thunk);
        const store = createStore(reducer, PersistenceRegistry.getPersistedState(), middleware);

        StateListenerRegistry.subscribe(store);

        return store;
    }

    _navigate(route) {
        if (_.isEqual(route, this.state.route)) {
            return new Promise.resolve();
        }

        return new Promise(resolve => {
            this.setState({ route }, resolve);
        });
    }
}