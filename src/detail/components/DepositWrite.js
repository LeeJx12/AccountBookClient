import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../../app/components/Container";

export class DepositWrite extends Component {
    render() {
        const { _deposit } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col">
                        <input type="text" id="depositName" placeholder="계좌 이름" value={_deposit.depositName} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <textarea id="description" value={_deposit.description} />
                    </div>
                </div>
            </div>
        )
    }
}

function _mapStateToProps(state) {
    const deposit = state[`leejx2/accountbook/deposit`].deposit;

    return {
        _deposit: deposit
    };
}

export default connect(_mapStateToProps)(DepositWrite);