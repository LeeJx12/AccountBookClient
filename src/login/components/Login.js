import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { messagePop, MODAL_TYPE_ALERT, showProgressLayer } from "../../common";
import Encryptor from "../../common/encryptor";
import { actionLogin } from "../actions";

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
                        <button type="button" className="btn btn-primary" onClick={this.login}>로그인</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

    login = () => {
        const loginId = document.querySelector("#loginId").value;
        let passWd = document.querySelector("#passwd").value;
        const autoLogin = document.querySelector("#autoLogin").checked;

        //TODO: 모달 다이얼로그 추가할것 + 스피너 추가할것!
        if (_.isEmpty(loginId) || _.isEmpty(passWd)) {
            messagePop(this.props.dispatch, MODAL_TYPE_ALERT, '아이디와 패스워드를 입력하세요!', () => {
                if (_.isEmpty(loginId)) {
                    document.querySelector("#loginId").focus();
                } else if (_.isEmpty(passWd)) {
                    document.querySelector("#passwd").focus();
                }
            });
            return;
        }

        passWd = Encryptor.encrypt(passWd);

        showProgressLayer(this.props.dispatch);
        this.props.dispatch(actionLogin(loginId, passWd, autoLogin));
    }
}

function _mapStateToProps(state) {
    const scheme = state[`leejx2/accountbook/login`];
    const autoLogin = scheme?.autoLogin || false;
    const loginId = scheme?.loginId || '';
    let passWd = scheme?.passWd || '';
    if (!_.isEmpty(passWd)) passWd = Encryptor.decrypt(passWd);

    return {
        _autoLogin: autoLogin,
        _loginId: loginId,
        _passWd: passWd
    };
}

export default connect(_mapStateToProps)(Login);