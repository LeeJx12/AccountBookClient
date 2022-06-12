import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";

export class DetailCard extends Component {
    render() {
        const { depositId, depositName, description, amount, depositTypeName, startDate, endDate, company } = this.props;

        return (
            <div className="card mt-3 mb-1">
                <div className="card-header bg-white">
                    <img src="./icons/icon-target.svg" className="img-fluid mb-1" />
                    신한 110-355-140469
                </div>
                <div className="card-body">
                    <h6 className="card-title">주거래 통장</h6>
                    <h6 className="card-subtitle mb-2 pb-3 text-muted">2022.05.01 ~ 2024.04.30</h6>
                    <div className="row">
                        <div className="col">
                            <p className="card-text">100,000,000 원</p>
                        </div>
                        <div className="col-2 mx-1 deposit-more">
                            <img src="./icons/icon-more.svg" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function _mapStateToProps(state) {
    const sessionUser = state[`leejx2/accountbook/login`].sessionUser;
    const livExpDepositId = sessionUser.livExpDepositId;

    return {
        _livExpDepositId: livExpDepositId
    }
}

export default connect(_mapStateToProps)(DetailCard);