import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../../app/components/Container";
import { MODAL_TYPE_CONFIRM, messagePop, Input, showProgressLayer } from "../../common";
import { getDateStr } from "../../common/functions";
import { actionLogout } from "../../login";
import { saveSetting } from "../actions";

export class SettingPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            _userName, 
            _startDate,
            _targetAmount,
            _monthLife,
            _dayLife,
            _deposits,
            _livExpDepositId
        } = this.props;

        const disabled = _.isEmpty(_livExpDepositId);

        return (
            <Container>
                <div className="row py-3 justify-content-around align-items-center profile_layout">
                    <div className="col">
                        <h4>{_userName}</h4>
                        <small className="text-muted">{_startDate}</small>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-outline-primary btn-sm bg-white" onClick={this.logout}>로그아웃</button>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <Input id="targetAmount" className="mb-3" iconName="icon-target" title="목표액" initMount={_targetAmount} />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <Input id="monthLife" className="mb-3" iconName="icon-calendar-red" title="월 생활비" initMount={_monthLife} />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <Input id="dayLife" className="mb-3" iconName="icon-calc-blue" title="일일 생활비" initMount={_dayLife} />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="livexpdepositid" className="form-label">
                            <img src="./icons/icon-card.svg" className="img-fluid pb-1" /> 생활비 계좌 
                        </label>
                        <select className="form-select" id="livexpdepositid" aria-label="주 생활비 계좌를 등록하세요!" disabled={disabled}>
                            {
                                _deposits.map(deposit => {
                                    const selected = _livExpDepositId === deposit.id ? 'selected' : '';
                                    return (
                                        <option value={deposit.id} selected={selected}>{deposit.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col my-3 d-grid">
                        <button type="button" className="btn btn-outline-primary bg-white" onClick={this.onSave}>저장</button>
                    </div>
                </div>
            </Container>
        )
    }

    logout = () => {
        const { dispatch } = this.props;

        messagePop(dispatch, MODAL_TYPE_CONFIRM, '로그아웃 하시겠습니까?', () => {
            dispatch(actionLogout());
        });
    }

    onSave = () => {
        const { dispatch } = this.props;

        showProgressLayer(dispatch);

        const targetAmount      = Number(document.querySelector("#targetAmount").value.replace(/\,/gi, ''));
        const monthLife         = Number(document.querySelector("#monthLife").value.replace(/\,/gi, ''));
        const dayLife           = Number(document.querySelector("#dayLife").value.replace(/\,/gi, ''));
        const livExpDepositId   = document.querySelector("#livexpdepositid").value;

        dispatch(saveSetting(targetAmount, monthLife, dayLife, livExpDepositId));
    }
}

function _mapStateToProps(state) {
    const sessionUser = state[`leejx2/accountbook/login`].sessionUser;
    const deposits = state[`leejx2/accountbook/login`].deposits || [];
    const { userName } = sessionUser;
    const startDate = getDateStr(new Date(sessionUser.startDate), 'yyyy.MM.dd');

    return {
        _userName:          userName,
        _startDate:         startDate,
        _targetAmount:      sessionUser.targetAmount,
        _monthLife:         sessionUser.monthLife,
        _dayLife:           sessionUser.dayLife,
        _deposits:          deposits,
        _livExpDepositId:   sessionUser.livExpDepositId || ''
    };
}

export default connect(_mapStateToProps)(SettingPane);