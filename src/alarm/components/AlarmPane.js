import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../../app/components/Container";

export class AlarmPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container>
                <div className="card mt-3 mb-1">
                    <div className="card-body">
                        <h6 className="card-title">신한 110-355-140469</h6>
                        <h6 className="card-subtitle mb-2 pb-3 text-muted" style={{borderBottom: '1px solid #e9ecef'}}>2022.05.01 18:54</h6>
                        <div className="row">
                            <div className="col">
                                <p className="card-text" style={{color: '#dc3545', fontWeight: 'bold'}}>100,000 원</p>
                            </div>
                            <div className="col-2 mx-1" style={{textAlign: 'end'}}>
                                <img src="./icons/icon-plus.svg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-3 mb-1">
                    <div className="card-body">
                        <h6 className="card-title">카카오 110-355-140469</h6>
                        <h6 className="card-subtitle mb-2 pb-3 text-muted" style={{borderBottom: '1px solid #e9ecef'}}>2022.05.01 18:54</h6>
                        <div className="row">
                            <div className="col">
                                <p className="card-text" style={{color: '#0d6efd', fontWeight: 'bold'}}>200,000 원</p>
                            </div>
                            <div className="col-2 mx-1" style={{textAlign: 'end'}}>
                                <img src="./icons/icon-plus.svg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-3 mb-1">
                    <div className="card-body">
                        <h6 className="card-title">신한 110-355-140469</h6>
                        <h6 className="card-subtitle mb-2 pb-3 text-muted" style={{borderBottom: '1px solid #e9ecef'}}>2022.05.01 18:54</h6>
                        <div className="row">
                            <div className="col">
                                <p className="card-text" style={{color: '#dc3545', fontWeight: 'bold'}}>54,000 원</p>
                            </div>
                            <div className="col-2 mx-1" style={{textAlign: 'end'}}>
                                <img src="./icons/icon-plus.svg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-3 mb-1">
                    <div className="card-body">
                        <h6 className="card-title">농협 110-355-140469<img src="./icons/icon-plus.svg" className="img-fluid mx-2 pb-1" /></h6>
                        <h6 className="card-subtitle mb-2 pb-3 text-muted" style={{borderBottom: '1px solid #e9ecef'}}>2022.05.01 18:54</h6>
                        <div className="row">
                            <div className="col">
                                <p className="card-text" style={{color: '#0d6efd', fontWeight: 'bold'}}>100,000,000 원</p>
                            </div>
                            <div className="col-2 mx-1" style={{textAlign: 'end'}}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-3 mb-1">
                    <div className="card-body">
                        <h6 className="card-title">농협 110-355-140469</h6>
                        <h6 className="card-subtitle mb-2 pb-3 text-muted" style={{borderBottom: '1px solid #e9ecef'}}>2022.05.01 18:54</h6>
                        <div className="row">
                            <div className="col">
                                <p className="card-text" style={{color: '#0d6efd', fontWeight: 'bold'}}>100,000,000 원</p>
                            </div>
                            <div className="col-2 mx-1" style={{textAlign: 'end'}}>
                                <img src="./icons/icon-plus.svg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-3 mb-3">
                    <div className="card-body">
                        <h6 className="card-title">농협 110-355-140469</h6>
                        <h6 className="card-subtitle mb-2 pb-3 text-muted" style={{borderBottom: '1px solid #e9ecef'}}>2022.05.01 18:54</h6>
                        <div className="row">
                            <div className="col">
                                <p className="card-text" style={{color: '#0d6efd', fontWeight: 'bold'}}>100,000,000 원</p>
                            </div>
                            <div className="col-2 mx-1" style={{textAlign: 'end'}}>
                                <img src="./icons/icon-plus.svg" className="img-fluid" />
                            </div>
                        </div>
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

export default connect(_mapStateToProps)(AlarmPane);