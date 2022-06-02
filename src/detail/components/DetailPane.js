import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../../app/components/Container";

export class DetailPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container>
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
                <div className="card mt-3 mb-1">
                    <div className="card-header bg-white">
                        카카오페이 110-355-140469
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">생활비 통장</h6>
                        <h6 className="card-subtitle mb-2 pb-3 text-muted">2022.05.01 ~ 2024.04.30</h6>
                    <div className="row">
                        <div className="col">
                            <p className="card-text">100,000,000 원</p>
                        </div>
                        <div className="col-2 mx-1">
                            <img src="./icons/icon-more.svg" className="img-fluid"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card mt-3 mb-1">
                    <div className="card-header bg-white">
                        과학기술인공제회 110-355-140469
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">과학기술인공제회 청년적금</h6>
                        <h6 className="card-subtitle mb-2 pb-3 text-muted">2022.05.01 ~ 2024.04.30</h6>
                    <div className="row">
                        <div className="col">
                            <p className="card-text">100,000,000 원</p>
                        </div>
                        <div className="col-2 mx-1">
                            <img src="./icons/icon-more.svg" className="img-fluid"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col" style={{textAlign: 'center'}}>
                        <img src="./icons/icon-plus.svg" className="img-fluid" />
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

export default connect(_mapStateToProps)(DetailPane);