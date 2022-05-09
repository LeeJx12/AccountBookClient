import React, { Component } from "react";
import { connect } from "react-redux";
import { APP_SCHEME_NAME } from "../../common/constants";

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { _autoLogin, _loginId, _passWd } = this.props;

        return (
            <div className="container-xxl">
                <div className="row pt-5 mt-5 justify-content-center">
                    <div className="col px-5 text-center">
                        <img className="img-fluid pt-5 px-5" src="./icons/outlet_4.png" />
                    </div>
                </div>
                <div className="row px-4 justify-content-center">
                    <div className="col px-5 text-center">
                        <input type="text" id="loginId" className="form-control" placeholder="ID" defaultValue={_loginId}/>
                    </div>
                </div>
                <div className="row px-4 pt-2 justify-content-center">
                    <div className="col px-5 text-center">
                        <input type="password" id="passwd" className="form-control" placeholder="password" defaultValue={_passWd} />
                    </div>
                </div>
                <div className="row px-4 pt-2 justify-content-center">
                    <div className="col px-5">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="autoLogin" defaultChecked={_autoLogin}/>
                            <label className="form-check-label" htmlFor="autoLogin"> 자동로그인 </label>
                        </div>
                    </div>
                </div>
                <div className="row px-4 pt-4 justify-content-center">
                    <div className="col px-5 text-center">
                    <div className="d-grid">
                        <button type="button" className="btn btn-primary">로그인</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

function _mapStateToProps(state) {
    const scheme = state[`${APP_SCHEME_NAME}/login`];
    const autoLogin = scheme?.autoLogin || false;
    const loginId = scheme?.loginId || '';
    const passWd = scheme?.passWd || '';

    return {
        _autoLogin: autoLogin,
        _loginId: loginId,
        _passWd: passWd
    };
}

export default connect(_mapStateToProps)(Login);