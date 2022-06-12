import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../../app/components/Container";
import { showLayer } from "../../common";
import { DepositWrite } from "../components";
import DetailCard from "./DetailCard";

export class DetailPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { _deposits } = this.props;

        return (
            <Container>
                {
                    _deposits.length > 0 &&
                    _deposits.map(deposit => (
                        <DetailCard deposit={deposit}/>
                    ))
                }
                {
                    _deposits.length === 0 &&
                    <div className="row my-4">
                        <div className="col ta_c">
                            등록된 계좌가 없습니다.
                        </div>
                    </div>
                }
                <div className="row my-4">
                    <div className="col ta_c">
                        <img src="./icons/icon-plus.svg" className="img-fluid" onClick={this.showDepositAddLayer}/>
                    </div>
                </div>
            </Container>
        )
    }

    showDepositAddLayer = () => {
        const { dispatch } = this.props;
        showLayer(dispatch, (
            <DepositWrite/>
        ), "계좌 등록");
    }
}

function _mapStateToProps(state) {
    const deposits = state[`leejx2/accountbook/deposit`].deposits || [];

    return {
        _deposits: deposits
    };
}

export default connect(_mapStateToProps)(DetailPane);