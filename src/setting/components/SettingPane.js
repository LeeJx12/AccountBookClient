import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../../app/components/Container";

export class SettingPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container>
                <div className="row py-3 justify-content-around align-items-center profile_layout">
                    <div className="col">
                        <h4>이정준</h4>
                        <small className="text-muted">2022.04.30</small>
                    </div>
                    <div className="col" style={{textAlign: 'end'}}>
                        <button type="button" className="btn btn-outline-primary btn-sm bg-white">로그아웃</button>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="targetAmount" className="form-label">
                                <img src="./icons/icon-target.svg" className="img-fluid pb-1" /> 목표액 </label>
                            <input type="text" className="form-control" id="targetAmount" placeholder="100,000,000" aria-describedby="amountHelper"/>
                                <div id="amountHelper" className="form-text mx-2">1억원</div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="monthLife" className="form-label">
                                <img src="./icons/icon-calendar-red.svg" className="img-fluid pb-1" /> 월 생활비 </label>
                            <input type="text" className="form-control" id="monthLife" placeholder="500,000" aria-describedby="monthHelper"/>
                                <div id="monthHelper" className="form-text mx-2">50만원</div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="dayLife" className="form-label">
                                <img src="./icons/icon-calc-blue.svg" className="img-fluid pb-1" /> 일일 생활비 </label>
                            <input type="text" className="form-control" id="dayLife" placeholder="10,000" aria-describedby="dayHelper"/>
                                <div id="dayHelper" className="form-text mx-2">1만원</div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="livexpdepositid" className="form-label">
                            <img src="./icons/icon-card.svg" className="img-fluid pb-1" /> 생활비 계좌 </label>
                        <select className="form-select" id="livexpdepositid" aria-label="주 생활비 계좌를 등록하세요!">
                            <option value="1">신한</option>
                            <option value="2">카카오페이</option>
                            <option value="3">국민</option>
                        </select>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col my-3 d-grid">
                        <button type="button" className="btn btn-outline-primary bg-white">저장</button>
                    </div>
                </div>
            </Container>
        )
    }
}

function _mapStateToProps(state) {
    return {

    };
}

export default connect(_mapStateToProps)(SettingPane);